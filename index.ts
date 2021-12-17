import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

import { authRouter, indexRouter } from './route';

const app = express();
dotenv.config();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/auth', authRouter);
app.use('/', indexRouter);

app.listen(process.env.PORT, () => console.log('connected'));
