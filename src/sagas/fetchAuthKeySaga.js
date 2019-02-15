import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import actions from '../actions/index';
import {
  FETCH_AUTH_KEY,
} from '../constants/Actions';

function* fetchAuthKey(action) {
  try {
    const response = yield call(axios.post, 'https://reqres.in/api/login', {
      email: action.payload.login,
      password: action.payload.password,
    });
    yield put(actions.authActions.fetchAuthKeySuccess(response));
  } catch (err) {
    yield put(actions.authActions.fetchAuthKeyFail(err));
  }
}

export default function* fetchAuthKeySaga() {
  yield takeLatest(FETCH_AUTH_KEY, fetchAuthKey);
}
