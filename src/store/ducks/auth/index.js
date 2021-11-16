import { AuthTypes } from './types';
import { sagas } from './sagas';

const INITIAL_STATE = {
  authentication: { isAuth: false, user: null },
  loading: false,
  error: { isError: false, message: '' },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /**
     * Login types
     */
    case AuthTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: { isError: false, message: '' },
      };
    case AuthTypes.LOGIN_SUCCESS:
      return {
        ...state,
        authentication: {
          isAuth: true,
          user: action.payload,
        },
        loading: false,
        error: { isError: false, message: '' },
      };
    case AuthTypes.LOGIN_FAILURE:
      return {
        ...state,
        isAuth: false,
        loading: false,
        error: { isError: true, message: action.payload.errorMessage },
      };

    /**
     * Logout Types
     */
    case AuthTypes.LOGOUT_REQUEST:
      return { ...state, authentication: { isAuth: false } };

    default:
      return state;
  }
};

export default reducer;
export { sagas };
