import {
  UPDATE_HOUSE_WATCH_LOTS,
  UPDATE_HOUSE_WATCH_LOTS_SUCCESS,
  UPDATE_HOUSE_WATCH_LOTS_FAIL,
  UPDATE_HOUSE_WATCH_STATE,
  CHECK_HOUSE_WATCH_STATE,
  CHECK_HOUSE_WATCH_STATE_TRUE,
  CHECK_HOUSE_WATCH_STATE_FALSE,
  REMOVE_HOUSE_WATCH_JOB,
  PAUSE_HOUSE_WATCH_JOB,
  RESUME_HOUSE_WATCH_JOB,
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

export const removeHouseWatchJob = data => ({
  type: REMOVE_HOUSE_WATCH_JOB,
  payload: data,
});

export const pauseHouseWatchJob = data => ({
  type: PAUSE_HOUSE_WATCH_JOB,
  payload: data,
});

export const resumeHouseWatchJob = data => ({
  type: RESUME_HOUSE_WATCH_JOB,
  payload: data,
});
