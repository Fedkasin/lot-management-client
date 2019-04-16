import {
  UPDATE_HOUSE_WATCH_LOTS,
  UPDATE_HOUSE_WATCH_LOTS_SUCCESS,
  UPDATE_HOUSE_WATCH_LOTS_FAIL,
  UPDATE_HOUSE_WATCH_STATE,
  CHECK_HOUSE_WATCH_STATE,
  CHECK_HOUSE_WATCH_STATE_TRUE,
  CHECK_HOUSE_WATCH_STATE_FALSE,
} from '../../constants/Actions';

export const updateHouseWatchLots = jobId => ({
  type: UPDATE_HOUSE_WATCH_LOTS,
  payload: { jobId },
});

export const updateHouseWatchLotsSuccess = data => ({
  type: UPDATE_HOUSE_WATCH_LOTS_SUCCESS,
  payload: data,
});

export const updateHouseWatchLotsFail = err => ({
  type: UPDATE_HOUSE_WATCH_LOTS_FAIL,
  error: err,
});

export const checkWatchHouseLotsState = data => ({
  type: CHECK_HOUSE_WATCH_STATE,
  payload: data,
});

export const watchHouseLots = data => ({
  type: UPDATE_HOUSE_WATCH_STATE,
  payload: data,
});

export const watchHouseLotsTrue = data => ({
  type: CHECK_HOUSE_WATCH_STATE_TRUE,
  payload: data,
});

export const watchHouseLotsFalse = data => ({
  type: CHECK_HOUSE_WATCH_STATE_FALSE,
  payload: data,
});