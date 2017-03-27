import React from 'react';
import { IndexRoute, Route } from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Smart components (not at all)
import CoreContainer from './containers/CoreContainer';

// Dumb components (pages)
import Overview from './pages/Overview';
import Informations from './pages/Informations';
import Cluster from './pages/Cluster';
import About from './pages/About';
import NotFound from './pages/NotFound';

injectTapEventPlugin();

export default (
  <Route path="/" component={CoreContainer}>
    <IndexRoute component={Overview} />
    <Route path="/about" component={About} title="About" />
    <Route path="/informations" component={Informations} title="Informations" />
    <Route path="/cluster" component={Cluster} title="Cluster" />
    <Route path="*" component={NotFound} title="404 - Page not found" />
  </Route>
);
