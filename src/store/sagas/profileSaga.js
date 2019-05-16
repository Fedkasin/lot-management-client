import {
  call, put, take, takeLatest,
} from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';

import actions from '../actions/index';
import { navigate } from '../actions/navigationActionCreators';
import {
  LOAD_PROFILE, LOGIN_SUCCESS, LOGOUT_SUCCESS,
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
    yield put(actions.profileActions.fetchProfileFail(err.message));
    yield put(navigate(AUTH_STACK));
  }
}

export default function* fetchProfileSaga() {
  yield takeLatest(LOAD_PROFILE, fetchProfile);
}
