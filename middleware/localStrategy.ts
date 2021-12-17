import passport from 'passport';
import passportLocal from 'passport-local';

import { getUser, Iuser } from './db';

const LocalStrategy = passportLocal.Strategy;
const LOCAL_STRATEGY_OPTIONS = {
  usernameField: 'username',
  passwordField: 'password',
};

const verifyCallback = (
  username: string,
  password: string,
  done: (arg0: null | Error, arg1: Boolean | Iuser) => void,
) => {
  const user = <Iuser>getUser(username)!;
  console.log(user);
  if (!user) return done(null, false);
  if (user.password !== password) return done(null, false);
  done(null, user);
};

const initLocalStrategy = () => passport.use(new LocalStrategy(LOCAL_STRATEGY_OPTIONS, verifyCallback));

export default initLocalStrategy;
