import { call, put, takeLatest } from 'redux-saga/effects';

import actions from '../actions/index';
import { navigate } from '../actions/navigationActionCreators';
import {
  LOGIN,
  LOGOUT,
  CHECK_IF_LOGGED_IN,
} from '../../constants/Actions';
import { signInWithGoogleAsync, signOut, isLoggedIn } from '../../helpers/authHelpers';
import { APP_TAB, AUTH_STACK } from '../../constants/Routes';

function* login(action) {
  try {
    const data = yield call(signInWithGoogleAsync, action.payload);
    yield put(actions.authActions.loginSuccess(data.user));
    yield put(navigate(APP_TAB));
  } catch (err) {
    yield put(actions.authActions.loginFail(err.message));
    yield put(navigate(AUTH_STACK));
  }
}

function* logout() {
  try {
    yield put(navigate(AUTH_STACK));
    yield call(signOut);
    yield put(actions.authActions.logoutSuccess());
  } catch (err) {
    yield put(actions.authActions.logoutFail(err));
    yield put(navigate(APP_TAB));
  }
}

function* checkIfLoggedIn() {
  try {
    const user = yield call(isLoggedIn);
    if (user) {
      yield put(navigate(APP_TAB));
    } else {
      yield put(navigate(AUTH_STACK));
    }
  } catch (err) {
    yield put(navigate(AUTH_STACK));
  }
}

export function* loginSaga() {
  yield takeLatest(LOGIN, login);
}

export function* logoutSaga() {
  yield takeLatest(LOGOUT, logout);
}

export function* loggedInSaga() {
  yield takeLatest(CHECK_IF_LOGGED_IN, checkIfLoggedIn);
}
