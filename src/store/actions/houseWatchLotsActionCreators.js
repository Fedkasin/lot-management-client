import {
  UPDATE_HOUSE_WATCH_LOTS,
  UPDATE_HOUSE_WATCH_LOTS_SUCCESS,
  UPDATE_HOUSE_WATCH_LOTS_FAIL,
  CHECK_HOUSE_WATCH_STATE,
  CHECK_HOUSE_WATCH_STATE_TRUE,
  CHECK_HOUSE_WATCH_STATE_FALSE,
  CHECK_HOUSE_WATCH_STATE_FAIL,
  REMOVE_HOUSE_WATCH_JOB,
  PAUSE_HOUSE_WATCH_JOB,
  PAUSED_HOUSE_WATCH_JOBS_TRUE,
  PAUSED_HOUSE_WATCH_JOBS_FALSE,
  RESUME_HOUSE_WATCH_JOB,
  EDIT_HOUSE_WATCH_JOB_LIST,
  CHECK_PAUSED_HOUSE_WATCH_JOBS,
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

export const watchHouseLotsTrue = data => ({
  type: CHECK_HOUSE_WATCH_STATE_TRUE,
  payload: data,
});

export const watchHouseLotsFalse = data => ({
  type: CHECK_HOUSE_WATCH_STATE_FALSE,
  payload: data,
});

export const checkWatchHouseLotsStateFail = err => ({
  type: CHECK_HOUSE_WATCH_STATE_FAIL,
  error: err,
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

export const editHouseWatchJobList = data => ({
  type: EDIT_HOUSE_WATCH_JOB_LIST,
  payload: data,
});

export const pauseAllJobs = data => ({
  type: CHECK_PAUSED_HOUSE_WATCH_JOBS,
  payload: data,
});

export const checkPausedHouseLotsTrue = data => ({
  type: PAUSED_HOUSE_WATCH_JOBS_TRUE,
  payload: data,
});

export const checkPausedHouseLotsFalse = data => ({
  type: PAUSED_HOUSE_WATCH_JOBS_FALSE,
  payload: data,
});
