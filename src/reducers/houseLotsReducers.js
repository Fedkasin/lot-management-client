import {
  FETCH_HOUSE_LOTS,
  FETCH_HOUSE_LOTS_SUCCESS,
  FETCH_HOUSE_LOTS_FAIL,
  UPDATE_HOUSE_WATCH_LOTS,
  UPDATE_HOUSE_WATCH_LOTS_SUCCESS,
  UPDATE_HOUSE_WATCH_LOTS_FAIL,
} from '../constants/Actions';

const initialState = {
  isFetching: false,
  houseLots: [],
  page: 0,
  itemsPerPage: 10,
  error: null,
  filters: null,
};

const houseLotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_HOUSE_WATCH_LOTS:
      return {
        ...state,
        isFetching: true,
      };
    case UPDATE_HOUSE_WATCH_LOTS_SUCCESS:
      return {
        ...state,
        error: null,
        houseLots: [...action.payload],
        isFetching: false,
      };
    case UPDATE_HOUSE_WATCH_LOTS_FAIL:
      return {
        ...state,
        error: action.error,
        houseLots: [],
        isFetching: false,
      };
    case FETCH_HOUSE_LOTS:
      return {
        ...state,
        filters: action.payload.filters,
        isFetching: true,
      };
    case FETCH_HOUSE_LOTS_SUCCESS:
      return {
        ...state,
        error: null,
        houseLots: [...state.houseLots, ...action.payload.message.apartments],
        isFetching: false,
      };
    case FETCH_HOUSE_LOTS_FAIL:
      return {
        ...state,
        error: action.error,
        houseLots: [],
        filters: {},
        isFetching: false,
      };
    default:
      return state;
  }
};

export default houseLotsReducer;
