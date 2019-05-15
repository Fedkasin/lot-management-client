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
  error: null,
};

const authReducers = (state = initialState, action) => {
  console.log('[REDUX]', action.type);
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.error,
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
        err: null,
        isLoading: false,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        isLoading: false,
        err: action.error,
      };
    default:
      return state;
  }
};

export default authReducers;
