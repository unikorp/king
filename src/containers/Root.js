import React, { PropTypes } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import { IndexRoute, Router, Route } from 'react-router';

import CoreContainer from './CoreContainer';
import { About, NotFound, Overview } from './../components';

injectTapEventPlugin();

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={CoreContainer}>
        <IndexRoute component={Overview} />
        <Route path="/about" component={About} title="About" />
        <Route path="*" component={NotFound} title="404 - Page not found" />
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Root;
