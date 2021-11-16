import { BooksTypes } from './types';
import { sagas } from './sagas';

const INITIAL_STATE = {
  booksList: {
    list: null,
    loading: false,
    error: false,
  },
  bookDetails: {
    details: null,
    loading: false,
    error: false,
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /**
     * Books types
     */
    case BooksTypes.BOOKS_REQUEST:
      return { ...state, booksList: { loading: true, error: false } };

    case BooksTypes.BOOKS_SUCCESS:
      return {
        ...state,
        booksList: {
          list: action.payload.list,
          loading: false,
          error: false,
        },
      };

    case BooksTypes.BOOKS_FAILURE:
      return {
        ...state,
        booksList: {
          loading: false,
          error: true,
        },
      };

    /**
     * Book Details types
     */
    case BooksTypes.BOOK_DETAILS_REQUEST:
      return { ...state, bookDetails: { loading: true, error: false } };
    case BooksTypes.BOOK_DETAILS_SUCCESS:
      return {
        ...state,
        bookDetails: {
          details: action.payload.details,
          loading: false,
          error: false,
        },
      };
    case BooksTypes.BOOK_DETAILS_FAILURE:
      return { ...state, bookDetails: { loading: false, error: false } };

    default:
      return state;
  }
};

export default reducer;
export { sagas };
