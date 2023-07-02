import { all } from 'redux-saga/effects';
import { usersWatcherSaga } from './userSaga';
import { countWatcher } from './countSaga';

export function* rootWatcher() {
  yield all([usersWatcherSaga(), countWatcher()])
}