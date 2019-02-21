import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from '../constants/Actions';

const initialState = {
  isLogging: false,
  user: null,
  error: null,
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogging: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        user: action.payload,
        isLogging: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.error,
        user: null,
        isLogging: false,
      };
    case LOGOUT:
      return {
        ...state,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        err: null,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        user: null,
        err: action.error,
      };
    default:
      return state;
  }
};

export default authReducers;
