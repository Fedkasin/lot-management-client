import {
  put, takeLatest, all, take,
} from 'redux-saga/effects';
import { SplashScreen } from 'expo';

import { CHECK_IF_LOGGED_IN, SHOW_FIRST_SPLASH_SCREEN, APP_READY } from '../../constants/Actions';

export function* splashFlow() {
  yield all([
    take(APP_READY),
  ]);

  SplashScreen.hide();

  yield put({
    type: CHECK_IF_LOGGED_IN,
  });
}

const listSaga = function* () {
  yield takeLatest(SHOW_FIRST_SPLASH_SCREEN, splashFlow);
};

export default listSaga;
