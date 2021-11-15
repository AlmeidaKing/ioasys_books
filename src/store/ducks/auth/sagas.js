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

    console.log('response', response);

    if (response.status === 200) {
      localStorage.setItem('access-token', response.headers.authorization, {
        expires: 1 / 96,
      });
      localStorage.setItem('refresh-token', response.headers['refresh-token'], {
        expires: 1 / 8,
      });

      yield put(loginSuccess(response.data));
    }
  } catch (err) {
    yield put(loginFailure({ errorMessage: err.response.data.errors.message }));
  }
}

export function* logout() {
  localStorage.removeItem('access-token');
  localStorage.removeItem('refresh-token');
}

export function* watchAuth() {
  yield takeEvery(AuthTypes.LOGIN_REQUEST, login);
  yield takeEvery(AuthTypes.LOGOUT_REQUEST, logout);
}

export const sagas = [watchAuth];
