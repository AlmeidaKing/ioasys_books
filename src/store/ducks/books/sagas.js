import { call, put, takeEvery } from 'redux-saga/effects';
import { BooksTypes } from './types';

// actions:
import {
  booksSuccess,
  booksFailure,
  bookDetailsSuccess,
  bookDetailsFailure,
} from './actions';

// services:
import { booksApi } from 'services/api/ioasys-api/books';

export function* getBooksList({ payload }) {
  const data = {
    page: payload?.page || '',
    amount: payload?.amount || '',
    category: payload?.category || '',
  };

  try {
    const response = yield call(booksApi.getBooksList, data);

    if (response.status === 200) {
      yield put(booksSuccess({ list: response.data }));
    }
  } catch (err) {
    yield put(booksFailure());
  }
}

export function* getBookDetails({ payload }) {
  const data = {
    id: payload?.bookId || '',
  };

  try {
    const response = yield call(booksApi.getBookDetails, data);

    if (response.status === 200) {
      yield put(bookDetailsSuccess({ details: response.data }));
    }
  } catch (err) {
    yield put(bookDetailsFailure());
  }
}

export function* watchBooks() {
  yield takeEvery(BooksTypes.BOOKS_REQUEST, getBooksList);
  yield takeEvery(BooksTypes.BOOK_DETAILS_REQUEST, getBookDetails);
}

export const sagas = [watchBooks];
