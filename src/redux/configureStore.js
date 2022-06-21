import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import pollution from './currentPollution/currentPollution';
import countries from './continentCountries/continentCountries';
import continent from './continent/continent';

const rootReducer = combineReducers({
  pollution,
  countries,
  continent,
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
