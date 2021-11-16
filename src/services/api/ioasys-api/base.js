import axios from 'axios';

import authApi from './auth';

const apiBase = axios.create({
  baseURL: `${process.env.REACT_APP_IOASYS_BOOK_API_BASE_URL}v1/`,
});

const callApiBase = (call) => {
  let { headers } = call;

  const {
    endpoint,
    method = 'GET',
    token = '',
    // refreshToken = '',
    params = {},
    data = {},
    showJSON = false,
    showConsoleLog = false,
    title = '',
  } = call;

  // Config Headers
  const defaultHeaders = {
    'Content-Type': 'application/json',
    'Client-Device': 'browser',
    'Accept-Language': 'pt-BR',
    'source-version': 'v1',
  };

  headers = { ...headers, ...defaultHeaders };

  if (token) headers.Authorization = `Bearer ${token}`;

  // Helpers for Debug
  if (showConsoleLog) {
    console.log(`[${title} - CALL API COMPLETE]`, {
      headers,
      method,
      endpoint,
      params,
      data,
    });
  }

  if (showJSON) {
    console.log(`[${title} - CALL API JSON DATA]`, JSON.stringify(data));
  }

  apiBase.interceptors.response.use(
    (response) => {
      if (showConsoleLog) {
        console.log(`${title} - RESPONSE`, response);
      }

      return response;
    },
    async (error) => {
      if (
        error.response.config.url === '/auth/refresh-token' ||
        !localStorage.getItem('refresh-token')
      ) {
        if (window.location.pathname !== '/login') {
          localStorage.removeItem('refresh-token');
          localStorage.removeItem('access-token');
          window.location.href = '/';
        }
      } else if (error.response.status === 401) {
        try {
          const oldRefreshToken = localStorage.getItem('refresh-token');

          if (oldRefreshToken !== '') {
            const response = await authApi.refreshToken({
              refreshToken: oldRefreshToken,
            });

            if (response.status === 204) {
              localStorage.setItem(
                'access-token',
                response.headers.authorization
              );

              localStorage.setItem(
                'refresh-token',
                response.headers['refresh-token']
              );

              return apiBase(error.response.config.url, {
                headers: {
                  ...headers,
                  authorization: `Bearer ${response.headers.authorization}`,
                },
                method: error.response.config.method,
                data: error.response.config.data,
                params: error.response.config.params,
              });
            }
          }
        } catch (err) {
          return err;
        }
      }

      if (showConsoleLog) {
        console.error(`${title} - ERROR`, error);
      }
      return Promise.reject(error);
    }
  );

  if (method === 'GET' || method === 'DELETE') {
    return apiBase(endpoint, {
      params: { ...params },
      headers,
      method,
    });
  }

  return apiBase(endpoint, {
    headers,
    method,
    data,
  });
};

export default callApiBase;
export { callApiBase };
