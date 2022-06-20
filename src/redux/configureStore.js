import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import pollution from './currentPollution/currentPollution';
import countries from './continentCountries/continentCountries';

const rootReducer = combineReducers({
  pollution,
  countries,
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
