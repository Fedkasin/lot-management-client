import {
  takeLatest, all, take,
} from 'redux-saga/effects';
import { SplashScreen } from 'expo';

import { SHOW_FIRST_SPLASH_SCREEN, APP_READY } from '../../constants/Actions';

export function* splashFlow() {
  yield all([
    take(APP_READY),
  ]);

  SplashScreen.hide();
}

const listSaga = function* () {
  yield takeLatest(SHOW_FIRST_SPLASH_SCREEN, splashFlow);
};

export default listSaga;
