import { put, takeLatest } from 'redux-saga/effects';

import actions from '../actions/index';
import {
  UPDATE_HOUSE_WATCH_LOTS,
} from '../constants/Actions';

function* updateWatchHouseLots(action) {
  try {
    // MIN-MAX -number ROOMS - array (spec). example: ?min=10&max=20&rooms[]=1&rooms[]=2
    yield put(actions.houseLotsActions.updateHouseWatchLotsSuccess(action.payload));
  } catch (err) {
    yield put(actions.houseLotsActions.updateHouseWatchLotsFail(err));
  }
}

export default function* udateWatchHouseLotsSaga() {
  yield takeLatest(UPDATE_HOUSE_WATCH_LOTS, updateWatchHouseLots);
}
