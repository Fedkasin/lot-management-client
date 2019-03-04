import { call, takeLatest } from 'redux-saga/effects';

import { NAVIGATE, NAVIGATE_DEEP } from '../../constants/Actions';

const handleNavigate = function* handleNavigate(service, action) {
  const { payload: { routeName, params, key } } = action;
  yield call(service.getNavigator().navigate, routeName, params, key);
};

const handleNavigateDeep = function* handleNavigateDeep(service, action) {
  const { payload: { routeName, params, key } } = action;
  yield call(service.getNavigator().navigateDeep, routeName, params, key);
};

const listSaga = function* listSaga(service) {
  yield takeLatest(NAVIGATE, handleNavigate, service);
  yield takeLatest(NAVIGATE_DEEP, handleNavigateDeep, service);
};

export default listSaga;
