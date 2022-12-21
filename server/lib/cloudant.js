import { CloudantV1 } from '@ibm-cloud/cloudant';
import { authenticator } from './iam-authenticator.js';

// Set the default database name.
export const db = process.env.CLOUDANT_DATABASE;
/* istanbul ignore if */
if (!db) {
  throw new Error('CLOUDANT_DATABASE environment variable MUST be set.');
}

// Make sure a Cloudant URL is configured.
/* istanbul ignore if */
if (!process.env.CLOUDANT_URL) {
  throw new Error('CLOUDANT_URL environment variable MUST be set.');
}

// Create and export a client.
export const client = CloudantV1.newInstance({ authenticator });

// Make sure the database exists.
/* istanbul ignore next */
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

// Export a wrapper around cloudant, which uses the configured document.
export default {
  getDocument: ({ docId }) => client.getDocument({ db, docId }),
  postDocument: ({ document }) => client.postDocument({ db, document })
  // TODO Add other functions, as they are needed.
};
