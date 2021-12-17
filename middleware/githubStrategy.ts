import passport from 'passport';
import GithubStrategy from 'passport-github';
import { getUser } from './db';

import dotenv from 'dotenv';
dotenv.config();

const GITHUB_STRATEGY_OPTIONS = {
  clientID: <string>process.env.GITHUB_CLIENT_ID,
  clientSecret: <string>process.env.GITHUB_SECRET_KEY,
  callbackURL: <string>process.env.GITHUB_CALLBACK_URL,
};

const verifyCallback = (accessToken: string, _: string, profile: any, done: any) => {
  const { username } = profile;
  const user = getUser(username);
  if (!user) return done(null, false);
  return done(null, user);
};

const initGithubStrategy = () => passport.use(new GithubStrategy(GITHUB_STRATEGY_OPTIONS, verifyCallback));

export default initGithubStrategy;
