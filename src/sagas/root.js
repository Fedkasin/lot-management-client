import { spawn } from 'redux-saga/effects';

import changeSettingSaga from './changeSettingsSaga';
import fetchSettingsSaga from './fetchSettingsSaga';
import { loginSaga, logoutSaga } from './authorizationSaga';
import fetchCarLotsSaga from './fetchCarLotsSaga';
import fetchHouseLotsSaga from './fetchHouseLotsSaga';
import udateWatchHouseLotsSaga from './udateWatchHouseLotsSaga';

export default function* rootSaga() {
  yield spawn(changeSettingSaga);
  yield spawn(fetchSettingsSaga);
  yield spawn(loginSaga);
  yield spawn(logoutSaga);
  yield spawn(fetchCarLotsSaga);
  yield spawn(fetchHouseLotsSaga);
  yield spawn(udateWatchHouseLotsSaga);
}
