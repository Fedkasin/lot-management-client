import { call, put, takeLatest } from 'redux-saga/effects';

import LMapi from '../../helpers/lmapi';
import actions from '../actions/index';
import { FETCH_CAR_LOTS } from '../../constants/Actions';

function* fetchCarLots() {
  try {
    const mquery = {
      price: {
        min: '7000',
        max: '10000',
      },
      place: {
        country: 'belarus',
        state: 'minsk',
        city: 'minsk',
      },
      body: 'sedan',
      year: {
        min: '1997',
        max: '2002',
      },
      fuel: 'disel',
      currency: 'USD',
      sort: 'lastTimeUp',
      page: '1',
      car: {
        brand: 'bmw',
        model: '5',
      },
    };
    // eslint-disable-next-line max-len
    const query = `min-price=${mquery.price.min}&max-price=${mquery.price.max}&place-country=${mquery.place.country}&place-state=${mquery.place.state}&place-city=${mquery.place.city}&body-type=${mquery.body}&min-year=${mquery.year.min}&max-year=${mquery.year.max}&fuel=${mquery.fuel}&car-brand=${mquery.car.brand}&car-model=${mquery.car.model}`;
    const response = yield call(LMapi.getCars, query);
    yield put(actions.carLotsActions.fetchCarLotsSuccess(response));
  } catch (err) {
    const error = JSON.stringify(err);
    yield put(actions.carLotsActions.fetchCarLotsFail(error));
  }
}

export default function* fetchCarLotsSaga() {
  yield takeLatest(FETCH_CAR_LOTS, fetchCarLots);
}
