import { callApiBase } from './base';

const authApi = {
  login: (payload) =>
    callApiBase({
      title: 'Auth - Login',
      endpoint: '/auth/sign-in',
      method: 'POST',
      data: { ...payload },
    }),
};

export default authApi;
export { authApi };
