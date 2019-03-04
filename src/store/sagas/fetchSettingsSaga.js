import { put, takeLatest } from 'redux-saga/effects';

import actions from '../actions/index';
import {
  FETCH_SETTINGS,
} from '../../constants/Actions';

function* fetchSettings(action) {
  try {
    yield put(actions.settingsActions.fetchSettingsSuccess(action.payload));
  } catch (err) {
    yield put(actions.settingsActions.fetchSettingsFail(err));
  }
}

export default function* fetchSettingsSaga() {
  yield takeLatest(FETCH_SETTINGS, fetchSettings);
}
