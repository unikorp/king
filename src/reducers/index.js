import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import gui from './gui';

const rootReducer = combineReducers({
  gui,
  routing,
});

export default rootReducer;
