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
  houseWatchJobs: [
    {
      jobId: 'HataWatch2342',
      params: {
        max: 350,
        min: 250,
        rooms: [
          1,
          2,
        ],
      },
      state: 'RUNNING',
    },
    {
      jobId: 'HataWatch4815',
      params: {
        max: 450,
        min: 350,
        rooms: [
          1,
          2,
        ],
      },
      state: 'PAUSED',
    },
    {
      jobId: 'HataWatch1313',
      params: {
        max: 50,
        min: 300,
        rooms: [
          1,
        ],
      },
      state: 'RUNNING',
    },
    {
      jobId: 'HataWatch4444',
      params: {
        max: 500,
        min: 600,
        rooms: [
          1,
          2,
          3,
          4,
        ],
      },
      state: 'RUNNING',
    },
  ],
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
