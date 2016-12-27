import Core from './components/Core';

function errorLoading(error) {
  throw new Error(`Dynamic page loading failed: ${error}`);
}

function loadRoute(cb) {
  return module => cb(null, module.default);
}

export default {
  path: '/',
  component: Core,
  indexRoute: {
    getComponent(location, cb) {
      System.import('./components/Home')
        .then(loadRoute(cb))
        .catch(errorLoading);
    },
  },
  childRoutes: [
    {
      path: 'about',
      getComponent(location, cb) {
        System.import('./components/About')
          .then(loadRoute(cb, false))
          .catch(errorLoading);
      },
    },
    {
      path: '*',
      getComponent(location, cb) {
        System.import('./components/Home')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    },
  ],
};
