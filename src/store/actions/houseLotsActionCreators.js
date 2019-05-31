import {
  FETCH_HOUSE_LOTS,
  FETCH_HOUSE_LOTS_SUCCESS,
  FETCH_HOUSE_LOTS_FAIL,
  SORT_HOUSE_LOTS,
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

export const setSortHouseLots = data => ({
  type: SORT_HOUSE_LOTS,
  payload: data,
});
