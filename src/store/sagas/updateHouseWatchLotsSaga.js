import { put, takeLatest, call } from 'redux-saga/effects';

import LMapi from '../../helpers/lmapi';
import actions from '../actions/index';
import {
  UPDATE_HOUSE_WATCH_LOTS,
} from '../../constants/Actions';

function* updateHouseWatchLots(action) {
  try {
    const { jobId } = action.payload;
    const response = yield call(LMapi.getHousesWatch, jobId);
    yield put(actions.houseWatchLotsActions.updateHouseWatchLotsSuccess(response));
  } catch (err) {
    yield put(actions.houseWatchLotsActions.updateHouseWatchLotsFail(err));
  }
}

export default function* updateHouseWatchLotsSaga() {
  yield takeLatest(UPDATE_HOUSE_WATCH_LOTS, updateHouseWatchLots);
}
