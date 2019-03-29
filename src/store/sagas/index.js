import { all } from 'redux-saga/effects';

import appSaga from './appSaga';
import navigateSaga from './navigateSaga';
import changeSettingSaga from './changeSettingsSaga';
import fetchSettingsSaga from './fetchSettingsSaga';
import { loginSaga, logoutSaga, loggedInSaga } from './authorizationSaga';
import fetchCarLotsSaga from './fetchCarLotsSaga';
import fetchHouseLotsSaga from './fetchHouseLotsSaga';
import updateHouseWatchLotsSaga from './udateWatchHouseLotsSaga';

export default function* (service) {
  const rootSagas = [
    appSaga(),
    navigateSaga(service),
    loggedInSaga(),
    changeSettingSaga(),
    fetchSettingsSaga(),
    loginSaga(),
    logoutSaga(),
    fetchCarLotsSaga(),
    fetchHouseLotsSaga(),
    updateHouseWatchLotsSaga(),
  ];

  yield all(rootSagas, service);
}
