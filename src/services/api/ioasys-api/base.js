import axios from 'axios';

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
