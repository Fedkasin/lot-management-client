import { call, put, takeLatest } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

import actions from '../actions/index';
import {
  FETCH_HOUSE_LOTS,
  UPDATE_HOUSE_WATCH_LOTS,
} from '../../constants/Actions';

function* fetchHouseLots(action) {
  try {
    // MIN-MAX -number ROOMS - array (spec). example: ?min=10&max=20&rooms[]=1&rooms[]=2
    // const TOKEN = yield call(AsyncStorage.getItem, '@RootStore:NOTIFICATIONS_TOKEN');
    const API_ADDRESS = yield call(AsyncStorage.getItem, '@InputStore:Address');
    const roomsArray = Array.from(new Set([action.payload.filters.roomsFrom, action.payload.filters.roomsTo]));
    const rooms = roomsArray.length > 1 ? `&rooms[]=${roomsArray.join('&rooms[]=')}` : `&rooms[]=${roomsArray[0]}`;
    const price = `min=${action.payload.filters.priceFrom}&max=${action.payload.filters.priceTo}`;
    const query = `${price}${rooms}`;
    const response = yield call(axios.get, `https://${API_ADDRESS}/onliner?${query}`);
    yield put(actions.houseLotsActions.fetchHouseLotsSuccess(response.data));
  } catch (err) {
    yield put(actions.houseLotsActions.fetchHouseLotsFail(err));
  }
}

function* updateHouseWatchLots(action) {
  try {
    const API_ADDRESS = yield call(AsyncStorage.getItem, '@InputStore:Address');
    const { jobId } = action.payload;
    const response = yield call(axios.get, `https://${API_ADDRESS}/watch/${jobId}`);
    yield put(actions.houseLotsActions.fetchHouseLotsSuccess(response.data));
    console.log('response', response);
  } catch (err) {
    yield put(actions.houseLotsActions.fetchHouseLotsFail(err));
  }
}

export function* fetchHouseLotsSaga() {
  yield takeLatest(FETCH_HOUSE_LOTS, fetchHouseLots);
}

export function* updateHouseWatchLotsSaga() {
  yield takeLatest(UPDATE_HOUSE_WATCH_LOTS, updateHouseWatchLots);
}
