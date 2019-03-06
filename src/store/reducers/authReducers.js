import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from '../../constants/Actions';

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  user: null,
  error: null,
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        user: action.payload,
        isLoggedIn: true,
        isLoading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.error,
        user: null,
        isLoggedIn: false,
        isLoading: false,
      };
    case LOGOUT:
      return {
        ...state,
        isLoading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        err: null,
        isLoggedIn: false,
        isLoading: false,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        err: action.error,
      };
    default:
      return state;
  }
};

export default authReducers;
