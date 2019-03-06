import { call, put, takeLatest } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

import actions from '../actions/index';
import {
  FETCH_HOUSE_LOTS,
} from '../../constants/Actions';

function* fetchHouseLots() {
  try {
    // MIN-MAX -number ROOMS - array (spec). example: ?min=10&max=20&rooms[]=1&rooms[]=2
    // const TOKEN = yield call(AsyncStorage.getItem, '@RootStore:NOTIFICATIONS_TOKEN');
    const API_ADDRESS = yield call(AsyncStorage.getItem, '@InputStore:Address');
    const response = yield call(axios.get, `https://${API_ADDRESS}/onliner?min=200&max=400&rooms[]=1&rooms[]=2`);
    yield put(actions.houseLotsActions.fetchHouseLotsSuccess(response.data));
  } catch (err) {
    yield put(actions.houseLotsActions.fetchHouseLotsFail(err));
  }
}

export default function* fetchHouseLotsSaga() {
  yield takeLatest(FETCH_HOUSE_LOTS, fetchHouseLots);
}
