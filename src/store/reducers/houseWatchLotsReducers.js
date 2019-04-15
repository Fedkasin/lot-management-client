import {
  UPDATE_HOUSE_WATCH_LOTS,
  UPDATE_HOUSE_WATCH_LOTS_SUCCESS,
  UPDATE_HOUSE_WATCH_LOTS_FAIL,
  UPDATE_HOUSE_WATCH_STATE,
  CHECK_HOUSE_WATCH_STATE,
  CHECK_HOUSE_WATCH_STATE_TRUE,
  CHECK_HOUSE_WATCH_STATE_FALSE,
} from '../../constants/Actions';

const initialState = {
  isFetching: false,
  isWatching: false,
  houseWatchLots: [],
  page: 0,
  itemsPerPage: 10,
  error: null,
};

const houseWatchLotsReducer = (state = initialState, action) => {
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
        houseWatchLots: [...action.payload.message.apartments.onliner.apartments],
        isFetching: false,
      };
    case UPDATE_HOUSE_WATCH_LOTS_FAIL:
      return {
        ...state,
        error: action.error,
        houseWatchLots: [],
        isFetching: false,
      };
    case UPDATE_HOUSE_WATCH_STATE:
      return {
        ...state,
        isWatching: action.payload,
      };
    case CHECK_HOUSE_WATCH_STATE:
      return {
        ...state,
      };
    case CHECK_HOUSE_WATCH_STATE_TRUE:
      return {
        ...state,
        isWatching: true,
      };
    case CHECK_HOUSE_WATCH_STATE_FALSE:
      return {
        ...state,
        isWatching: false,
        houseWatchLots: [],
      };
    default:
      return state;
  }
};

export default houseWatchLotsReducer;
