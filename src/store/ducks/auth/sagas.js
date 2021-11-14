import { call, put, takeEvery } from 'redux-saga/effects';
import { AuthTypes } from './types';

// actions:
import { loginSuccess, loginFailure } from './actions';

// services:
import { authApi } from 'services/api/ioasys-api/auth';

export function* login({ payload }) {
  const data = {
    email: payload?.email || '',
    password: payload?.password || '',
  };

  try {
    const response = yield call(authApi.login, data);

    if (response.status === 200) {
      yield put(loginSuccess());
    }
  } catch (err) {
    yield put(loginFailure({ errorMessage: err.response.data.errors.message }));
  }
}

export function* watchAuth() {
  yield takeEvery(AuthTypes.LOGIN_REQUEST, login);
}

export const sagas = [watchAuth];
