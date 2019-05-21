import { put, takeLatest, call } from 'redux-saga/effects';

import { Localization } from 'expo';
import i18n from 'i18n-js';
import LMapi from '../../helpers/lmapi';
import actions from '../actions/index';
import {
  FETCH_HOUSE_WATCH_LOTS,
} from '../../constants/Actions';
import Locales from '../../../assets/locales';

i18n.fallbacks = true;
i18n.translations = Locales;
i18n.locale = Localization.locale;

function* updateHouseWatchLots(action) {
  try {
    const { jobId } = action.payload;
    const response = yield call(LMapi.getHousesWatch, jobId);
    yield put(actions.houseWatchLotsActions.updateHouseWatchLotsSuccess(response));
  } catch (err) {
    const error = (err.response) ? `${i18n.t('ERROR')}: ${err.response.body.error}` : `${i18n.t('UNKNOWN_ERROR')}`;
    yield put(actions.houseWatchLotsActions.updateHouseWatchLotsFail(error));
  }
}

export default function* updateHouseWatchLotsSaga() {
  yield takeLatest(FETCH_HOUSE_WATCH_LOTS, updateHouseWatchLots);
}
