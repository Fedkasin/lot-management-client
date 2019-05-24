import { AsyncStorage } from 'react-native';
import {
  call, put, takeLatest,
} from 'redux-saga/effects';
import { Constants } from 'expo';

import actions from '../actions/index';
import LMapi from '../../helpers/lmapi';
import { navigate } from '../actions/navigationActionCreators';
import {
  LOGIN,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../../constants/Actions';
import { signInWithGoogleAsync, signOut } from '../../helpers/authHelpers';
import { AUTH_STACK, APP_TAB } from '../../constants/Routes';
import * as Errors from '../../constants/Errors';

function* logout() {
  try {
    yield call(signOut);
    yield put(actions.authActions.logoutSuccess());
    console.log('[authSaga:26]authActions.logoutSuccess()')
  } catch (err) {
    yield put(actions.authActions.logoutFail());
  }
}

function* checkIfLoggedIn() {
  try {
    const user = yield call(AsyncStorage.getItem, '@UserStore:FBUSER');
    const token = yield call(AsyncStorage.getItem, '@UserStore:API_TOKEN');
    yield call([LMapi, LMapi.getUserDevices]);
    if (!user || !token) {
      console.log('checkIfLoggedIn false');
      yield put({ type: 'LOGOUT', logout });
    } else {
      console.log('checkIfLoggedIn true');
      yield put(actions.authActions.loginSuccess());
    }
  } catch (err) {
    yield put(actions.authActions.loginFail(Errors.authfail));
  }
}

function* login(action) {
  try {
    const data = yield call(signInWithGoogleAsync, action.payload);
    console.log('[saga] signInWithGoogleAsync');
    const idToken = yield call(AsyncStorage.getItem, '@UserStore:TOKEN');
    const {
      accessToken,
      refreshToken,
      user: { id },
    } = data;
    const expo = {
      pushToken: yield call(AsyncStorage.getItem, '@RootStore:NOTIFICATIONS_TOKEN'),
      uniqueId: Constants.installationId,
      deviceId: Constants.deviceName,
      systemName: Constants.platform.android ? 'android' : 'ios',
    };
    const body = {
      auth: {
        id_token: idToken,
        access_token: accessToken,
        refresh_token: refreshToken,
        uid: id,
      },
      expo,
    };
    console.log('[saga] call LMapi.logIn', idToken);
    yield call(LMapi.logIn, body);
    console.log('[saga] call LMapi.logIn passed');
    const user = yield call(AsyncStorage.getItem, '@UserStore:FBUSER');
    const token = yield call(AsyncStorage.getItem, '@UserStore:API_TOKEN');
    if (user && token) {
      yield call(checkIfLoggedIn);
      console.log('[saga] call checkIfLoggedIn');
    }
  } catch (err) {
    yield put(actions.authActions.loginFail(Errors.authfail));
  }
}

function* navigateToTabs() {
  yield put(navigate(APP_TAB));
}

function* navigateToAuth() {
  yield put(navigate(AUTH_STACK));
}

export function* loginSuccess() {
  yield takeLatest(LOGIN_SUCCESS, navigateToTabs);
}

export function* loginFail() {
  yield takeLatest(LOGIN_FAIL, navigateToAuth);
}

export function* logoutSuccess() {
  yield takeLatest(LOGOUT_SUCCESS, navigateToAuth);
}

export function* logoutFail() {
  yield takeLatest(LOGOUT_FAIL, navigateToAuth);
}

export function* loginSaga() {
  yield takeLatest(LOGIN, login);
}

export function* logoutSaga() {
  yield takeLatest(LOGOUT, logout);
}

export function* loggedInSaga() {
  yield takeLatest(action => /^FETCH_/.test(action.type), checkIfLoggedIn);
}
