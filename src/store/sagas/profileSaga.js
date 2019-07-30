import {
  call, put, take, takeLatest,
} from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';

import actions from '../actions/index';
import LMapi from '../../helpers/lmapi';
import { navigate } from '../actions/navigationActionCreators';
import {
  FETCH_PROFILE,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SET_GLOBAL_NOTIFY_STATUS_GRANTED,
  SET_GLOBAL_NOTIFY_STATUS_DENIED,
  SET_LOCAL_NOTIFY_STATUS_GRANTED,
  SET_LOCAL_NOTIFY_STATUS_DENIED,
} from '../../constants/Actions';
import { AUTH_STACK } from '../../constants/Routes';

function* fetchProfile() {
  try {
    let profile = yield call(AsyncStorage.getItem, '@UserStore:FBUSER');
    if (profile) {
      yield put(actions.profileActions.fetchProfileSuccess(profile));
    } else {
      yield take([LOGOUT_SUCCESS, LOGIN_SUCCESS]);
      profile = yield call(AsyncStorage.getItem, '@UserStore:FBUSER');
      if (profile) {
        yield put(actions.profileActions.fetchProfileSuccess(profile));
      } else {
        yield put(navigate(AUTH_STACK));
      }
    }
  } catch (err) {
    yield put(actions.profileActions.fetchProfileFail(err.toString()));
    yield put(navigate(AUTH_STACK));
  }
}

function* fetchSettings(action) {
  try {
    const response = yield call(LMapi.getUserDevices);
    if (response.status === 200) {
      switch (action.type) {
        case SET_GLOBAL_NOTIFY_STATUS_GRANTED:
          console.log('SET_GLOBAL_NOTIFY_STATUS_GRANTED');
          break;
        case SET_GLOBAL_NOTIFY_STATUS_DENIED:
          console.log('SET_GLOBAL_NOTIFY_STATUS_DENIED');
          break;
        case SET_LOCAL_NOTIFY_STATUS_GRANTED:
          console.log('SET_LOCAL_NOTIFY_STATUS_GRANTED');
          break;
        case SET_LOCAL_NOTIFY_STATUS_DENIED:
          console.log('SET_LOCAL_NOTIFY_STATUS_DENIED');
          break;
        default:
          console.log('SET_GLOBAL_NOTIFY_STATUS_GRANTED');
      }
    }
  } catch (err) {
    console.log(err);
  }
}

export function* fetchProfileSaga() {
  yield takeLatest(FETCH_PROFILE, fetchProfile);
}

export function* fetchSettingsSaga() {
  yield takeLatest(action => /NOTIFY_STATUS/.test(action.type), fetchSettings);
}
