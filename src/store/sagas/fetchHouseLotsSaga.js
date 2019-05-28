import { call, put, takeLatest } from 'redux-saga/effects';

import t from '../../helpers/i18helper';
import LMapi from '../../helpers/lmapi';
import actions from '../actions/index';
import {
  FETCH_HOUSE_LOTS,
} from '../../constants/Actions';

function* fetchHouseLots(action) {
  try {
    // MIN-MAX -number ROOMS - array (spec). example: ?min=10&max=20&rooms[]=1&rooms[]=2
    const roomsArray = action.payload.filters.roomFilters;
    const rooms = roomsArray.length >= 1 ? `&rooms[]=${roomsArray.join('&rooms[]=')}` : '';
    const price = `min=${action.payload.filters.priceFrom}&max=${action.payload.filters.priceTo}`;
    const query = `${price}${rooms}`;
    const response = yield call(LMapi.getHouses, query);
    yield put(actions.houseLotsActions.fetchHouseLotsSuccess(response));
  } catch (err) {
    const error = (err.response) ? `${t('ERROR')}: ${err.response.body.error}` : t('UNKNOWN_ERROR');
    yield put(actions.houseLotsActions.fetchHouseLotsFail(error));
  }
}

export default function* fetchHouseLotsSaga() {
  yield takeLatest(FETCH_HOUSE_LOTS, fetchHouseLots);
}
