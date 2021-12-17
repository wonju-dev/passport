import express from 'express';
import path from 'path';

import authRouter from './auth';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

export { indexRouter, authRouter };
