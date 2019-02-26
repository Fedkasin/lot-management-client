import { call, put, takeLatest } from 'redux-saga/effects';

import actions from '../actions/index';
import {
  LOGIN,
  LOGOUT,
} from '../constants/Actions';
import { signInWithGoogleAsync, signOut } from '../helpers/authHelpers';
import { AUTH_LOADING, AUTH_STACK } from '../constants/Routes';
import NavigatorService from '../services/navigator';

function* login(action) {
  try {
    yield call(signInWithGoogleAsync, action.payload);
    /* console.log('Firebase sign in complete'); */
    yield put(actions.authActions.loginSuccess());
    /* console.log('login success'); */
    yield NavigatorService.navigate(AUTH_LOADING);
  } catch (err) {
    /* console.log('login failed'); */
    yield put(actions.authActions.loginFail(err.message));
    yield NavigatorService.navigate(AUTH_STACK);
  }
}

function* logout() {
  try {
    yield call(signOut);
    /* console.log('Firebase sign out complete'); */
    yield put(actions.authActions.logoutSuccess());
    /* console.log('logout success'); */
    yield NavigatorService.navigate(AUTH_STACK);
  } catch (err) {
    yield put(actions.authActions.logoutFail(err));
  }
}

export function* loginSaga() {
  yield takeLatest(LOGIN, login);
}

export function* logoutSaga() {
  yield takeLatest(LOGOUT, logout);
}
