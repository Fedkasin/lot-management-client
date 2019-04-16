import { call, put, takeLatest } from 'redux-saga/effects';
import LMapi from '../../helpers/lmapi';

import actions from '../actions/index';
import {
  FETCH_CAR_LOTS,
} from '../../constants/Actions';

function* fetchCarLots(action) {
  try {
    const start = action.payload.page * action.payload.itemsPerPage;
    const limit = action.payload.itemsPerPage;
    const response = yield call(LMapi.getCars, start, limit);
    yield put(actions.carLotsActions.fetchCarLotsSuccess(response));
  } catch (err) {
    yield put(actions.carLotsActions.fetchCarLotsFail(err));
  }
}

export default function* fetchCarLotsSaga() {
  yield takeLatest(FETCH_CAR_LOTS, fetchCarLots);
}
