import { BooksTypes } from './types';

/**
 * Books list actions
 */
export const booksRequest = (payload) => {
  return {
    type: BooksTypes.BOOKS_REQUEST,
    payload,
  };
};

export const booksSuccess = (payload) => {
  return {
    type: BooksTypes.BOOKS_SUCCESS,
    payload,
  };
};

export const booksFailure = () => {
  return {
    type: BooksTypes.BOOKS_FAILURE,
  };
};

/**
 * Book Details actions
 */
export const bookDetailsRequest = (payload) => {
  return {
    type: BooksTypes.BOOK_DETAILS_REQUEST,
    payload,
  };
};

export const bookDetailsSuccess = (payload) => {
  return {
    type: BooksTypes.BOOK_DETAILS_SUCCESS,
    payload,
  };
};

export const bookDetailsFailure = () => {
  return {
    type: BooksTypes.BOOK_DETAILS_FAILURE,
  };
};
