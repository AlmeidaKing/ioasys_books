import { callApiBase } from './base';

const accessToken = localStorage.getItem('access-token');

const authApi = {
  login: (payload) =>
    callApiBase({
      title: 'Auth - Login',
      endpoint: '/auth/sign-in',
      method: 'POST',
      data: { ...payload },
    }),
  refreshToken: (payload) => {
    return callApiBase({
      title: 'Refresh Token',
      endpoint: '/auth/refresh-token',
      method: 'POST',
      data: { refreshToken: payload.refreshToken },
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
  },
};

export default authApi;
export { authApi };
