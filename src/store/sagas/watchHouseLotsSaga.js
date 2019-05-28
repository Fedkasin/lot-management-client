import { put, takeLatest, call } from 'redux-saga/effects';
import t from '../../helpers/i18helper';
import LMapi from '../../helpers/lmapi';
import actions from '../actions/index';
import { navigate } from '../actions/navigationActionCreators';
import { HOUSE_WATCH_LOTS_SCREEN } from '../../constants/Routes';
import {
  UPDATE_HOUSE_WATCH_STATE,
  FETCH_HOUSE_WATCH_STATE,
  UPDATE_HOUSE_WATCH_FILTER_APPLY,
  REMOVE_HOUSE_WATCH_JOB,
  PAUSE_HOUSE_WATCH_JOB,
  RESUME_HOUSE_WATCH_JOB,
  CHECK_PAUSED_HOUSE_WATCH_JOBS,
} from '../../constants/Actions';

function* checkWatchHouseLotsState() {
  try {
    const res = yield call(LMapi.getCurrentUserJobs);
    const { message } = res || { message: [] };
    if (message.length) {
      yield put(actions.houseWatchLotsActions.watchHouseLotsTrue(message));
    } else {
      yield put(actions.houseWatchLotsActions.watchHouseLotsFalse());
    }
    let paused = 0;
    message.forEach((value) => {
      if (value.state === 'PAUSED') {
        paused += 1;
      }
    });
    if (paused !== message.length) {
      yield put(actions.houseWatchLotsActions.checkPausedHouseLotsTrue());
    } else {
      yield put(actions.houseWatchLotsActions.checkPausedHouseLotsFalse());
    }
  } catch (err) {
    const error = (err.response) ? `${t('ERROR')}: ${err.response.body.error}` : t('UNKNOWN_ERROR');
    yield put(actions.houseWatchLotsActions.updateHouseWatchLotsFail(error));
  }
}

function* watchHouseLots(action) {
  try {
    if (!action.payload) {
      yield call(checkWatchHouseLotsState);
    } else {
      yield put(actions.houseWatchLotsActions.watchHouseLotsTrue());
    }
  } catch (err) {
    const error = (err.response) ? `${t('ERROR')}: ${err.response.body.error}` : t('UNKNOWN_ERROR');
    yield put(actions.houseWatchLotsActions.updateHouseWatchLotsFail(error));
  }
}

function* pauseAllJobs(action) {
  try {
    if (action.payload) {
      yield call([LMapi, LMapi.pauseAllCurrentUserJobs]);
    } else {
      yield call([LMapi, LMapi.resumeAllCurrentUserJobs]);
    }
    yield call(checkWatchHouseLotsState);
  } catch (err) {
    const error = (err.response) ? `${t('ERROR')}: ${err.response.body.error}` : t('UNKNOWN_ERROR');
    yield put(actions.houseWatchLotsActions.checkWatchHouseLotsStateFail(error));
  }
}

function* updateHouseWatchFilterApply(action) {
  try {
    const { filters } = action.payload;
    const rooms = filters.roomFilters.map(item => parseInt(item, 10));
    const params = {
      rooms,
      max: parseInt(filters.priceTo, 10),
      min: parseInt(filters.priceFrom, 10),
    };
    yield call([LMapi, LMapi.startCurrentUserJob], params);
    yield call(checkWatchHouseLotsState);
    yield put(navigate(HOUSE_WATCH_LOTS_SCREEN));
  } catch (err) {
    const error = (err.response) ? `${t('ERROR')}: ${err.response.body.error}` : t('UNKNOWN_ERROR');
    yield put(actions.houseWatchLotsActions.checkWatchHouseLotsStateFail(error));
  }
}

function* removeHouseWatchJob(action) {
  try {
    yield call([LMapi, LMapi.removeCurrentUserJob], action.payload);
    yield call(checkWatchHouseLotsState);
  } catch (err) {
    const error = (err.response) ? `${t('ERROR')}: ${err.response.body.error}` : t('UNKNOWN_ERROR');
    yield put(actions.houseWatchLotsActions.checkWatchHouseLotsStateFail(error));
  }
}

function* pauseHouseWatchJob(action) {
  try {
    yield call([LMapi, LMapi.pauseCurrentUserJob], action.payload);
    yield call(checkWatchHouseLotsState);
  } catch (err) {
    const error = (err.response) ? `${t('ERROR')}: ${err.response.body.error}` : t('UNKNOWN_ERROR');
    yield put(actions.houseWatchLotsActions.checkWatchHouseLotsStateFail(error));
  }
}

function* resumeHouseWatchJob(action) {
  try {
    yield call([LMapi, LMapi.resumeCurrentUserJob], action.payload);
    yield call(checkWatchHouseLotsState);
  } catch (err) {
    const error = (err.response) ? `${t('ERROR')}: ${err.response.body.error}` : t('UNKNOWN_ERROR');
    yield put(actions.houseWatchLotsActions.checkWatchHouseLotsStateFail(error));
  }
}

export function* watchHouseLotsSaga() {
  yield takeLatest(UPDATE_HOUSE_WATCH_STATE, watchHouseLots);
}

export function* checkWatchHouseLotsStateSaga() {
  yield takeLatest(FETCH_HOUSE_WATCH_STATE, checkWatchHouseLotsState);
}

export function* updateHouseWatchFilterApplySaga() {
  yield takeLatest(UPDATE_HOUSE_WATCH_FILTER_APPLY, updateHouseWatchFilterApply);
}

export function* removeHouseWatchJobSaga() {
  yield takeLatest(REMOVE_HOUSE_WATCH_JOB, removeHouseWatchJob);
}

export function* pauseHouseWatchJobSaga() {
  yield takeLatest(PAUSE_HOUSE_WATCH_JOB, pauseHouseWatchJob);
}

export function* resumeHouseWatchJobSaga() {
  yield takeLatest(RESUME_HOUSE_WATCH_JOB, resumeHouseWatchJob);
}

export function* pauseAllJobsSaga() {
  yield takeLatest(CHECK_PAUSED_HOUSE_WATCH_JOBS, pauseAllJobs);
}
