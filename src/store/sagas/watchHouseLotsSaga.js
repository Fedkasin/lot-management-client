import { put, takeLatest, call } from 'redux-saga/effects';
import LMapi from '../../helpers/lmapi';
import actions from '../actions/index';

import {
  UPDATE_HOUSE_WATCH_STATE,
  CHECK_HOUSE_WATCH_STATE,
} from '../../constants/Actions';

function* checkWatchHouseLotsState() {
  console.log('checkWatchHouseLotsState');
  try {
    const res = yield call(LMapi.getCurrentUserJobs);
    if (res && res.length > 0) {
      yield put(actions.houseLotsActions.watchHouseLotsTrue());
      console.log('watchHouseLotsTrue:', res);
    } else {
      yield put(actions.houseLotsActions.watchHouseLotsFalse());
      console.log('watchHouseLotsFalse');
    }
  } catch (err) {
    console.error(err);
  }
}

function* watchHouseLots(action) {
  console.log('watchHouseLots');
  try {
    if (!action.payload) {
      yield call(LMapi.stopAllCurrentUserJobs);
      yield call(checkWatchHouseLotsState);
    } else {
      // yield put(actions.houseLotsActions.watchHouseLotsTrue());
      console.log('start watch ON');
    }
  } catch (err) {
    console.error(err);
  }
}

export function* watchHouseLotsSaga() {
  yield takeLatest(UPDATE_HOUSE_WATCH_STATE, watchHouseLots);
}

export function* checkWatchHouseLotsStateSaga() {
  yield takeLatest(CHECK_HOUSE_WATCH_STATE, checkWatchHouseLotsState);
}
