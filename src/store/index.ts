import { createStore, combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { bankAccauntReducer } from './bankAccaunt';
import { bankUsersReducer } from './users';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk  from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from '../saga';
import { sagaBankUsersReducer } from './usersSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const rootReducer = combineReducers({
  bankAccaunt: bankAccauntReducer,
  bankUsers: bankUsersReducer,
  sagaBankUsers: sagaBankUsersReducer, 
});

//first way to create store, async by thunk
// export const store = createStore(
//   rootReducer, 
//   composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
// );

//second way to create store, async by saga
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(middleware)
  }
});

export type RootReducer = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootWatcher);