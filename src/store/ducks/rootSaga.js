import { fork, all } from 'redux-saga/effects';

import { sagas as authSagas } from './auth';

const allSagas = [...authSagas];

export default function* rootSaga() {
  yield all(allSagas.map((saga) => fork(saga)));
}
