import RootReducer from './RootReducer';
import {createStore,applyMiddleware } from 'redux';
import logger from 'redux-logger';

const store=createStore(RootReducer,applyMiddleware(logger));

export default store;