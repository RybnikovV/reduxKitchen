import { put, takeEvery } from 'redux-saga/effects';
import { 
  addCashCreator, 
  getCashCreator,
  ADD_CASH_ASYNC,
  GET_CASH_ASYNC } from '../store/bankAccaunt';

const delay = () => {
  return new Promise(res => setTimeout(res, 2000))
};

function* incrementWorker( {payload} ) {
  yield delay();
  yield put(addCashCreator(payload));
};

function* decrementWorker({payload}) {
  yield delay();
  yield put(getCashCreator(payload));
};

export function* countWatcher() {
  yield takeEvery( ADD_CASH_ASYNC, incrementWorker )
  yield takeEvery( GET_CASH_ASYNC, decrementWorker )
};