import initLocalStrategy from './localStrategy';
import initGithubStrategy from './githubStrategy';

const initStrategies = () => {
  initLocalStrategy();
  initGithubStrategy();
};

export default initStrategies;
