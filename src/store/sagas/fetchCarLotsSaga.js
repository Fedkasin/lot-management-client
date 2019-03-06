import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import actions from '../actions/index';
import {
  FETCH_CAR_LOTS,
} from '../../constants/Actions';

function* fetchCarLots(action) {
  try {
    const start = action.payload.page * action.payload.itemsPerPage;
    const limit = action.payload.itemsPerPage;
    const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`);
    yield put(actions.carLotsActions.fetchCarLotsSuccess(response.data));
  } catch (err) {
    yield put(actions.carLotsActions.fetchCarLotsFail(err));
  }
}

export default function* fetchCarLotsSaga() {
  yield takeLatest(FETCH_CAR_LOTS, fetchCarLots);
}
