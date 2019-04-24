import {
  UPDATE_HOUSE_WATCH_LOTS,
  UPDATE_HOUSE_WATCH_LOTS_SUCCESS,
  UPDATE_HOUSE_WATCH_LOTS_FAIL,
  CHECK_HOUSE_WATCH_STATE,
  CHECK_HOUSE_WATCH_STATE_TRUE,
  CHECK_HOUSE_WATCH_STATE_FALSE,
  EDIT_HOUSE_WATCH_JOB_LIST,
} from '../../constants/Actions';

const initialState = {
  isFetching: false,
  isWatching: false,
  isEditing: false,
  houseWatchLots: [],
  houseWatchJobs: [],
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
        houseWatchLots: action.payload.message.apartments.onliner ? [...action.payload.message.apartments.onliner.apartments] : [],
        isFetching: false,
      };
    case UPDATE_HOUSE_WATCH_LOTS_FAIL:
      return {
        ...state,
        error: action.error,
        houseWatchLots: [],
        houseWatchJobs: [],
        isFetching: false,
      };
    case CHECK_HOUSE_WATCH_STATE:
      return {
        ...state,
        isFetching: true,
      };
    case CHECK_HOUSE_WATCH_STATE_TRUE:
      return {
        ...state,
        houseWatchJobs: [...action.payload],
        isWatching: true,
        isFetching: false,
      };
    case CHECK_HOUSE_WATCH_STATE_FALSE:
      return {
        ...state,
        isWatching: false,
        isFetching: false,
        houseWatchLots: [],
        houseWatchJobs: [],
      };
    case EDIT_HOUSE_WATCH_JOB_LIST:
      return {
        ...state,
        isEditing: !state.isEditing,
      };
    default:
      return state;
  }
};

export default houseWatchLotsReducer;
