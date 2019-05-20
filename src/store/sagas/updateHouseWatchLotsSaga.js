import { put, takeLatest, call } from 'redux-saga/effects';

import LMapi from '../../helpers/lmapi';
import actions from '../actions/index';
import {
  FETCH_HOUSE_WATCH_LOTS,
} from '../../constants/Actions';

function* updateHouseWatchLots(action) {
  try {
    const { jobId } = action.payload;
    const response = yield call(LMapi.getHousesWatch, jobId);
    yield put(actions.houseWatchLotsActions.updateHouseWatchLotsSuccess(response));
  } catch (err) {
    const error = (err.response) ? `Error: ${err.response.body.error}` : 'Unknown error';
    yield put(actions.houseWatchLotsActions.updateHouseWatchLotsFail(error));
  }
}

export default function* updateHouseWatchLotsSaga() {
  yield takeLatest(FETCH_HOUSE_WATCH_LOTS, updateHouseWatchLots);
}
