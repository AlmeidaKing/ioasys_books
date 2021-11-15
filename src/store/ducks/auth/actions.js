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

export const logoutRequest = () => {
  return {
    type: AuthTypes.LOGOUT_REQUEST,
  };
};

export const logoutSuccess = () => {
  return {
    type: AuthTypes.LOGOUT_SUCCESS,
  };
};

export const logoutFailure = () => {
  return {
    type: AuthTypes.LOGOUT_FAILURE,
  };
};
