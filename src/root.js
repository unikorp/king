import React from 'react';
import Router from 'react-router/lib/Router';
import hashHistory from 'react-router/lib/hashHistory';
import routes from './routes';

const Root = () => <Router history={hashHistory} routes={routes} />;

export default Root;
