import { call, put, takeLatest } from 'redux-saga/effects';

import { Localization } from 'expo';
import i18n from 'i18n-js';
import LMapi from '../../helpers/lmapi';
import actions from '../actions/index';
import {
  FETCH_HOUSE_LOTS,
} from '../../constants/Actions';
import Locales from '../../../assets/locales';

i18n.fallbacks = true;
i18n.translations = Locales;
i18n.locale = Localization.locale;

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
    const error = (err.response) ? `${i18n.t('ERROR')}: ${err.response.body.error}` : `${i18n.t('UNKNOWN_ERROR')}`;
    yield put(actions.houseLotsActions.fetchHouseLotsFail(error));
  }
}

export default function* fetchHouseLotsSaga() {
  yield takeLatest(FETCH_HOUSE_LOTS, fetchHouseLots);
}
