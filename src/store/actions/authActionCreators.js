import {
  LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL,
} from '../../constants/Actions';

export const login = config => ({
  type: LOGIN,
  payload: config,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFail = err => ({
  type: LOGIN_FAIL,
  error: err,
});

export const logout = () => ({
  type: LOGOUT,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const logoutFail = err => ({
  type: LOGOUT_FAIL,
  error: err,
});
