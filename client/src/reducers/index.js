import { combineReducers } from 'redux';
import areaReducer from './area-reducer';
import snowReducer from './snow-reducer';
import temperatureReducer from './temperature-reducer';
import stationsReducer from './stations-reducer';

export default combineReducers({
  areaReducer,
  snowReducer,
  temperatureReducer,
  stationsReducer
});