import createError from 'http-errors';
import { Router } from 'express';

import { characterRouter } from './character.js';


export const apiRouter = new Router();


apiRouter.use('/characters?', characterRouter);

// Catch and return errors.
/* eslint-disable-next-line no-unused-vars */
apiRouter.use((error, req, res, next) => {
  req.logger.error(error.message || error);
  res.status(error.status || 500)
    .send(error.message || error);
});
