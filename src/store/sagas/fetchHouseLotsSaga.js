import { call, put, takeLatest } from 'redux-saga/effects';

import axios from 'axios';

import actions from '../actions/index';
import {
  FETCH_HOUSE_LOTS,
} from '../../constants/Actions';
import getEnvVars from '../../constants/environment';

function* fetchHouseLots(action) {
  try {
    // MIN-MAX -number ROOMS - array (spec). example: ?min=10&max=20&rooms[]=1&rooms[]=2
    // const TOKEN = yield call(AsyncStorage.getItem, '@RootStore:NOTIFICATIONS_TOKEN');
    const roomsArray = Array.from(new Set([action.payload.filters.roomsFrom, action.payload.filters.roomsTo]));
    const rooms = roomsArray.length > 1 ? `&rooms[]=${roomsArray.join('&rooms[]=')}` : `&rooms[]=${roomsArray[0]}`;
    const price = `min=${action.payload.filters.priceFrom}&max=${action.payload.filters.priceTo}`;
    const query = `${price}${rooms}`;
    const response = yield call(axios.get, `${getEnvVars.apiUrl}/onliner?${query}`);
    yield put(actions.houseLotsActions.fetchHouseLotsSuccess(response.data));
  } catch (err) {
    yield put(actions.houseLotsActions.fetchHouseLotsFail(err));
  }
}

export default function* fetchHouseLotsSaga() {
  yield takeLatest(FETCH_HOUSE_LOTS, fetchHouseLots);
}
