import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import pollution from './currentPollution/currentPollution';

const rootReducer = combineReducers({
  pollution,
});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
