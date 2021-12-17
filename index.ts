import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

import passport from 'passport';
import initStrategies from './middleware';

import { authRouter, indexRouter } from './route';

const app = express();
dotenv.config();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use(passport.initialize());
initStrategies();

app.use('/auth', authRouter);
app.use('/', indexRouter);

app.listen(process.env.PORT, () => console.log('connected'));
