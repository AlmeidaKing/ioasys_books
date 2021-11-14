import { AuthTypes } from './types';

export const loginRequest = (payload) => {
  return {
    type: AuthTypes.LOGIN_REQUEST,
    payload,
  };
};

export const loginSuccess = () => {
  return {
    type: AuthTypes.LOGIN_SUCCESS,
  };
};

export const loginFailure = (payload) => {
  return {
    type: AuthTypes.LOGIN_FAILURE,
    payload,
  };
};
