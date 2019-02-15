import { spawn } from 'redux-saga/effects';

import changeSettingSaga from './changeSettingsSaga';
import fetchSettingsSaga from './fetchSettingsSaga';
import fetchAuthKeySaga from './fetchAuthKeySaga';
import fetchCarLotsSaga from './fetchCarLotsSaga';
import fetchHouseLotsSaga from './fetchHouseLotsSaga';
import udateWatchHouseLotsSaga from './udateWatchHouseLotsSaga';

export default function* rootSaga() {
  yield spawn(changeSettingSaga);
  yield spawn(fetchSettingsSaga);
  yield spawn(fetchAuthKeySaga);
  yield spawn(fetchCarLotsSaga);
  yield spawn(fetchHouseLotsSaga);
  yield spawn(udateWatchHouseLotsSaga);
}
