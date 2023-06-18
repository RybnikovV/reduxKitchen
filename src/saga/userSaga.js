import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchUsersSaga } from '../asyncAction/users';
import { SAGA_FETCH_USERS, sagaAddUsersAction } from '../store/usersSaga';

function* usersWorkerSaga() {
  const usersResponse = yield call(fetchUsersSaga)
  const preparedUsersData = yield call(() => new Promise(res => res(usersResponse.json())))
  yield put(sagaAddUsersAction(preparedUsersData))
};

export function* usersWatcherSaga() {
  yield takeEvery(SAGA_FETCH_USERS, usersWorkerSaga);
};