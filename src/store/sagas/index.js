import { all } from 'redux-saga/effects';

import navigateSaga from './navigateSaga';
import changeSettingSaga from './changeSettingsSaga';
import fetchSettingsSaga from './fetchSettingsSaga';
import { loginSaga, logoutSaga, loggedInSaga } from './authorizationSaga';
import fetchCarLotsSaga from './fetchCarLotsSaga';
import fetchHouseLotsSaga from './fetchHouseLotsSaga';
import udateWatchHouseLotsSaga from './udateWatchHouseLotsSaga';

export default function* rootSaga(service) {
  const rootSagas = [
    navigateSaga(service),
    changeSettingSaga(),
    fetchSettingsSaga(),
    loginSaga(),
    logoutSaga(),
    fetchCarLotsSaga(),
    fetchHouseLotsSaga(),
    udateWatchHouseLotsSaga(),
    loggedInSaga(),
  ];

  yield all(rootSagas, service);
}
