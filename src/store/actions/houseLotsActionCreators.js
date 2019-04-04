import {
  FETCH_HOUSE_LOTS,
  FETCH_HOUSE_LOTS_SUCCESS,
  FETCH_HOUSE_LOTS_FAIL,
  UPDATE_HOUSE_WATCH_LOTS,
  UPDATE_HOUSE_WATCH_LOTS_SUCCESS,
  UPDATE_HOUSE_WATCH_LOTS_FAIL,
} from '../../constants/Actions';

export const fetchHouseLots = filters => ({
  type: FETCH_HOUSE_LOTS,
  payload: {
    filters,
  },
});

export const fetchHouseLotsSuccess = data => ({
  type: FETCH_HOUSE_LOTS_SUCCESS,
  payload: data,
});

export const fetchHouseLotsFail = err => ({
  type: FETCH_HOUSE_LOTS_FAIL,
  error: err,
});

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
