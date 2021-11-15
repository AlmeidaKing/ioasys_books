import { callApiBase } from './base';
import store from 'store';

const booksApi = {
  getBooksList: (payload) => {
    const accessToken = localStorage.getItem('access-token');

    return callApiBase({
      title: 'Books - List',
      endpoint: '/books',
      method: 'GET',
      params: { ...payload },
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
  },
  getBookDetails: (payload) => {
    const accessToken = localStorage.getItem('access-token');
    const { id } = payload;
    return callApiBase({
      title: 'Book - Details',
      endpoint: `/books/${id}`,
      method: 'GET',
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
  },
};

export default booksApi;
export { booksApi };
