import { spawn } from 'redux-saga/effects';

import changeSettingSaga from '../sagas/changeSettingsSaga';
import fetchSettingsSaga from '../sagas/fetchSettingsSaga';
import fetchAuthKeySaga from '../sagas/fetchAuthKeySaga';
import fetchCarLotsSaga from '../sagas/fetchCarLotsSaga';
import fetchHouseLotsSaga  from '../sagas/fetchHouseLotsSaga';
import udateWatchHouseLotsSaga from '../sagas/udateWatchHouseLotsSaga';

export default function* rootSaga() {
    yield spawn(changeSettingSaga)
    yield spawn(fetchSettingsSaga)
    yield spawn(fetchAuthKeySaga)
    yield spawn(fetchCarLotsSaga)
    yield spawn(fetchHouseLotsSaga)
    yield spawn(udateWatchHouseLotsSaga)
  }