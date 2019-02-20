import { spawn } from 'redux-saga/effects';

import changeSettingSaga from './changeSettingsSaga';
import fetchSettingsSaga from './fetchSettingsSaga';
import { authorizationSaga, checkIfLoggedInSaga } from './authorizationSaga';
import fetchCarLotsSaga from './fetchCarLotsSaga';
import fetchHouseLotsSaga from './fetchHouseLotsSaga';
import udateWatchHouseLotsSaga from './udateWatchHouseLotsSaga';

export default function* rootSaga() {
  yield spawn(changeSettingSaga);
  yield spawn(fetchSettingsSaga);
  yield spawn(authorizationSaga);
  yield spawn(checkIfLoggedInSaga);
  yield spawn(fetchCarLotsSaga);
  yield spawn(fetchHouseLotsSaga);
  yield spawn(udateWatchHouseLotsSaga);
}
