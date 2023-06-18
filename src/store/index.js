import { createStore, combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { bankAccauntReducer } from './bankAccaunt';
import { bankUsersReducer } from './users';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk  from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { usersWatcherSaga } from '../saga/userSaga';
import { sagaBankUsersReducer } from './usersSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  bankAccaunt: bankAccauntReducer,
  bankUsers: bankUsersReducer,
  sagaBankUsers: sagaBankUsersReducer, 
});

export const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(usersWatcherSaga);