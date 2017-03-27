import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import gui from './gui';
import cluster from './cluster';

const rootReducer = combineReducers({
  gui: gui,
  routing: routing,
  cluster: cluster,
});

export default rootReducer;
