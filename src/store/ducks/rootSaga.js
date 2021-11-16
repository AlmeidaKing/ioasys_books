import { fork, all } from 'redux-saga/effects';

import { sagas as authSagas } from './auth';
import { sagas as booksSagas } from './books';

const allSagas = [...authSagas, ...booksSagas];

export default function* rootSaga() {
  yield all(allSagas.map((saga) => fork(saga)));
}
