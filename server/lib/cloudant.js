import { CloudantV1 } from '@ibm-cloud/cloudant';
import { authenticator } from './iam-authenticator.js';

// Set the default database name.
export const db = process.env.CLOUDANT_DATABASE;
if (!db) {
  throw new Error('CLOUDANT_DATABASE environment variable MUST be set.');
}

// Make sure a Cloudant URL is configured.
if (!process.env.CLOUDANT_URL) {
  throw new Error('CLOUDANT_URL environment variable MUST be set.');
}

// Create and export a client.
export const client = CloudantV1.newInstance({ authenticator });

// Make sure the database exists.
await client
  .putDatabase({ db })
  .then(({ result }) => {
    if (result.ok) {
      console.info(`Created database: ${db}`);
    } else {
      throw new Error('Unexpected response from Cloudant when creating database.');
    }
  })
  .catch(error => {
    if (error.code === 412) {
      console.debug(`Verified database exists: ${db}`);
    } else {
      throw error;
    }
  });

// Inject design documents.

// Set views in vanilla javascript.
/* eslint-disable no-var, no-undef */
const views = {
  characterList: `function(doc) {
    if (doc.name) {
      emit(doc.name, 1)
    }
    else emit(null, 1)
    
  }`
};
/* eslint-enable no-var,no-undef */

// Set up a designDoc object.
const designDoc = {
  views: {}
};

// For each view add them to the design doc in the format Cloudant understands.
for (const key of Object.keys(views)) {
  designDoc.views[key] = {map: views[key]};
}

// Get any existing design docs that match the 'allDocs' one we add programmatically.
const {result: existingDoc} = await client.getDesignDocument({db, ddoc: 'allDocs', latest: true})
  .catch(error => {
    console.error(error);
    if (error.status === 404 || error.code === 404) {
      return {};
    }
    throw error;
  });

// If there's a difference between the existing views and those we've set, update the doc in Cloudant.
if (JSON.stringify(designDoc.views) !== JSON.stringify(existingDoc?.views)) {
  await client.putDesignDocument({
    db,
    designDocument: {...designDoc, _rev: existingDoc?._rev},
    ddoc: 'allDocs'
  });
}

// Export a wrapper around cloudant, which uses the configured document.
export default {
  getDocument: (docId) => client.getDocument({ db, docId }),
  postDocument: (document) => client.postDocument({ db, document }),
  postView: (options) => client.postView({...options, db, ddoc: 'allDocs'}),
  // TODO Add other functions, as they are needed.
};
