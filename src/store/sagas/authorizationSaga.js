import { call, put, takeLatest } from 'redux-saga/effects';

import actions from '../actions/index';
import {
  LOGIN,
  LOGOUT,
  CHECK_IF_LOGGED_IN,
} from '../constants/Actions';
import { signInWithGoogleAsync, signOut, getUser } from '../helpers/authHelpers';
import { APP_TAB, AUTH_STACK } from '../constants/Routes';
import NavigatorService from '../services/navigator';

function* login(action) {
  try {
    yield call(signInWithGoogleAsync, action.payload);
  } catch (err) {
    yield put(actions.authActions.loginFail(err.message));
  }
}

function* logout() {
  try {
    yield call(signOut);
    yield put(actions.authActions.logoutSuccess());
  } catch (err) {
    yield put(actions.authActions.logoutFail(err));
  }
}

function* checkIfLoggedIn() {
  try {
    const user = yield call(getUser);
    if (user) {
      yield NavigatorService.navigate(APP_TAB);
    } else {
      yield NavigatorService.navigate(AUTH_STACK);
    }
  } catch (err) {
    yield NavigatorService.navigate(AUTH_STACK);
  }
}

export function* loginSaga() {
  yield takeLatest(LOGIN, login);
}

export function* logoutSaga() {
  yield takeLatest(LOGOUT, logout);
}

export function* loggedInSaga() {
  console.log('loged in saga');
  yield takeLatest(CHECK_IF_LOGGED_IN, checkIfLoggedIn);
}
