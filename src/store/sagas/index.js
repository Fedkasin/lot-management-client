import { all } from 'redux-saga/effects';

import appSaga from './appSaga';
import navigateSaga from './navigateSaga';
import changeSettingSaga from './changeSettingsSaga';
import fetchSettingsSaga from './fetchSettingsSaga';
import { loginSaga, logoutSaga, loggedInSaga } from './authorizationSaga';
import fetchCarLotsSaga from './fetchCarLotsSaga';
import fetchHouseLotsSaga from './fetchHouseLotsSaga';
import updateHouseWatchLotsSaga from './updateHouseWatchLotsSaga';
import {
  watchHouseLotsSaga,
  checkWatchHouseLotsStateSaga,
  updateHouseWatchFilterApplySaga,
  removeHouseWatchJobSaga,
} from './watchHouseLotsSaga';

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
    watchHouseLotsSaga(),
    checkWatchHouseLotsStateSaga(),
    updateHouseWatchFilterApplySaga(),
    removeHouseWatchJobSaga(),
  ];

  yield all(rootSagas, service);
}
