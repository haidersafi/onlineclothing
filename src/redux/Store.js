import RootReducer from './RootReducer';
import {createStore,applyMiddleware } from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';

const store=createStore(RootReducer,applyMiddleware(logger));
const persistor=persistStore(store);
export  {store,persistor};