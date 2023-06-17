import { createStore, combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { bankAccauntReducer } from './bankAccaunt';
import { bankUsersReducer } from './users';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk  from 'redux-thunk';

const rootReducer = combineReducers({
  bankAccaunt: bankAccauntReducer,
  bankUsers: bankUsersReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));