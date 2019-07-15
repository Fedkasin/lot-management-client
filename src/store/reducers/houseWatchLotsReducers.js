import {
  FETCH_HOUSE_WATCH_LOTS,
  FETCH_HOUSE_WATCH_LOTS_SUCCESS,
  FETCH_HOUSE_WATCH_LOTS_FAIL,
  FETCH_HOUSE_WATCH_STATE,
  FETCH_HOUSE_WATCH_STATE_TRUE,
  FETCH_HOUSE_WATCH_STATE_FALSE,
  FETCH_HOUSE_WATCH_STATE_FAIL,
  EDIT_HOUSE_WATCH_JOB_LIST,
  PAUSED_HOUSE_WATCH_JOBS_TRUE,
  PAUSED_HOUSE_WATCH_JOBS_FALSE,
  REMOVE_HOUSE_WATCH_JOB,
  UPDATE_HOUSE_WATCH_FILTER_APPLY,
  CHECK_PAUSED_HOUSE_WATCH_JOBS,
} from '../../constants/Actions';

const initialState = {
  isFetching: false,
  isWatching: false,
  isEditing: false,
  isAnyPaused: false,
  houseWatchLots: [],
  houseWatchJobs: [],
  page: 0,
  itemsPerPage: 10,
  error: null,
};

const houseWatchLotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOUSE_WATCH_LOTS:
      return {
        ...state,
        isFetching: true,
        jobId: action.payload.jobId,
      };
    case FETCH_HOUSE_WATCH_LOTS_SUCCESS:
      return {
        ...state,
        error: null,
        houseWatchLots: action.payload.message.apartments.onliner ? [...action.payload.message.apartments.onliner.apartments] : [],
        isFetching: false,
        isEditing: false,
      };
    case FETCH_HOUSE_WATCH_LOTS_FAIL:
      return {
        ...state,
        error: action.error,
        houseWatchLots: [],
        isFetching: false,
      };
    case FETCH_HOUSE_WATCH_STATE:
      return {
        ...state,
        isFetching: true,
        isEditing: false,
      };
    case FETCH_HOUSE_WATCH_STATE_TRUE:
      return {
        ...state,
        houseWatchJobs: [...action.payload],
        isWatching: true,
        isFetching: false,
      };
    case FETCH_HOUSE_WATCH_STATE_FALSE:
      return {
        ...state,
        isWatching: false,
        isFetching: false,
        houseWatchLots: [],
        houseWatchJobs: [],
      };
    case FETCH_HOUSE_WATCH_STATE_FAIL:
      return {
        ...state,
        error: action.error,
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
    case PAUSED_HOUSE_WATCH_JOBS_TRUE:
      return {
        ...state,
        isAnyPaused: true,
      };
    case PAUSED_HOUSE_WATCH_JOBS_FALSE:
      return {
        ...state,
        isAnyPaused: false,
      };
    case REMOVE_HOUSE_WATCH_JOB:
      return {
        ...state,
        isFetching: true,
        isEditing: false,
      };
    case UPDATE_HOUSE_WATCH_FILTER_APPLY:
      return {
        ...state,
        isFetching: true,
        isEditing: false,
      };
    case CHECK_PAUSED_HOUSE_WATCH_JOBS:
      return {
        ...state,
        isAnyPaused: !state.isAnyPaused,
        isFetching: true,
      };
    default:
      return state;
  }
};

export default houseWatchLotsReducer;
