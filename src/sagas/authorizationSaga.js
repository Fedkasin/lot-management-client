import { call, put, takeLatest } from 'redux-saga/effects';

import actions from '../actions/index';
import {
  LOGIN,
  LOGOUT,
} from '../constants/Actions';
import { signInWithGoogleAsync, signOut } from '../helpers/authHelpers';

async function* login(action) {
  try {
    const user = await signInWithGoogleAsync(action.payload);
    yield put(actions.authActions.loginSuccess(user));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('HEREE');
    yield put(actions.authActions.loginFail(err));
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

export function* loginSaga() {
  yield takeLatest(LOGIN, login);
}

export function* logoutSaga() {
  yield takeLatest(LOGOUT, logout);
}
