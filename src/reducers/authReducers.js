import {
  AUTHORIZE,
  AUTHORIZE_SUCCESS,
  AUTHORIZE_FAIL,
  CHECK_IF_LOGGED_IN,
  IS_LOGGED_IN,
  IS_NOT_LOGGED_IN,
} from '../constants/Actions';

const initialState = {
  isLogging: false,
  isLoggedIn: false,
  user: null,
  error: null,
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case AUTHORIZE:
      return {
        ...state,
        isLogging: true,
      };
    case AUTHORIZE_SUCCESS:
      return {
        ...state,
        error: null,
        user: action.payload,
        isLoggedIn: true,
        isLogging: false,
      };
    case AUTHORIZE_FAIL:
      return {
        ...state,
        error: action.error,
        user: null,
        isLoggedIn: false,
        isLogging: false,
      };
    case CHECK_IF_LOGGED_IN:
      return {
        ...state,
        isLogging: true,
      };
    case IS_LOGGED_IN:
      return {
        ...state,
        user: action.payload,
        isLogging: false,
        isLoggedIn: true,
      };
    case IS_NOT_LOGGED_IN:
      return {
        ...state,
        user: null,
        isLogging: false,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducers;
