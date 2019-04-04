import { put, takeLatest, call } from 'redux-saga/effects';

import axios from 'axios';

import actions from '../actions/index';
import {
  UPDATE_HOUSE_WATCH_LOTS,
} from '../../constants/Actions';
import getEnvVars from '../../constants/environment';

function* updateHouseWatchLots(action) {
  try {
    const { jobId } = action.payload;
    const response = yield call(axios.get, `${getEnvVars.apiUrl}/watch/${jobId}`);
    yield put(actions.houseLotsActions.updateHouseWatchLotsSuccess(response.data));
  } catch (err) {
    yield put(actions.houseLotsActions.updateHouseWatchLotsFail(err));
  }
}

export default function* updateHouseWatchLotsSaga() {
  yield takeLatest(UPDATE_HOUSE_WATCH_LOTS, updateHouseWatchLots);
}
