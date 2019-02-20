import {
  AUTHORIZE, AUTHORIZE_SUCCESS, AUTHORIZE_FAIL, CHECK_IF_LOGGED_IN, IS_LOGGED_IN, IS_NOT_LOGGED_IN,
} from '../constants/Actions';

export const authorize = config => ({
  type: AUTHORIZE,
  payload: config,
});

export const authorizeSuccess = data => ({
  type: AUTHORIZE_SUCCESS,
  payload: data,
});

export const authorizeFail = err => ({
  type: AUTHORIZE_FAIL,
  error: err,
});

export const checkIfLoggedIn = () => ({
  type: CHECK_IF_LOGGED_IN,
});

export const isLoggedIn = user => ({
  type: IS_LOGGED_IN,
  payload: user,
});

export const isNotLoggedIn = () => ({
  type: IS_NOT_LOGGED_IN,
});
