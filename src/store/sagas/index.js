import { all } from 'redux-saga/effects';

import appSaga from './appSaga';
import navigateSaga from './navigateSaga';
import {
  loginSaga, logoutSaga, loggedInSaga, proceedLogin, proceedLogout,
} from './authorizationSaga';
import fetchCarLotsSaga from './fetchCarLotsSaga';
import fetchHouseLotsSaga from './fetchHouseLotsSaga';
import updateHouseWatchLotsSaga from './updateHouseWatchLotsSaga';
import fetchProfileSaga from './profileSaga';
import {
  watchHouseLotsSaga,
  checkWatchHouseLotsStateSaga,
  updateHouseWatchFilterApplySaga,
  removeHouseWatchJobSaga,
  pauseHouseWatchJobSaga,
  resumeHouseWatchJobSaga,
  pauseAllJobsSaga,
} from './watchHouseLotsSaga';

export default function* (service) {
  const rootSagas = [
    appSaga(),
    navigateSaga(service),
    proceedLogin(),
    proceedLogout(),
    loggedInSaga(),
    loginSaga(),
    logoutSaga(),
    fetchProfileSaga(),
    fetchCarLotsSaga(),
    fetchHouseLotsSaga(),
    updateHouseWatchLotsSaga(),
    watchHouseLotsSaga(),
    checkWatchHouseLotsStateSaga(),
    updateHouseWatchFilterApplySaga(),
    removeHouseWatchJobSaga(),
    pauseHouseWatchJobSaga(),
    resumeHouseWatchJobSaga(),
    pauseAllJobsSaga(),
  ];

  yield all(rootSagas, service);
}
