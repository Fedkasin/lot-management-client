import {
  FETCH_HOUSE_LOTS,
  FETCH_HOUSE_LOTS_SUCCESS,
  FETCH_HOUSE_LOTS_FAIL,
  SORT_HOUSE_LOTS,
} from '../../constants/Actions';

const initialState = {
  isFetching: false,
  houseLots: [],
  sortedItems: [],
  error: null,
};

const houseLotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOUSE_LOTS:
      return {
        ...state,
        houseLots: [],
        isFetching: true,
      };
    case FETCH_HOUSE_LOTS_SUCCESS:
      return {
        ...state,
        error: null,
        houseLots: [...state.houseLots, ...action.payload.message.apartments],
        sortedItems: action.payload.message.apartments,
        isFetching: false,
      };
    case FETCH_HOUSE_LOTS_FAIL:
      return {
        ...state,
        error: action.error,
        houseLots: [],
        isFetching: false,
      };
    case SORT_HOUSE_LOTS:
      return {
        ...state,
        sortedItems: action.payload,
      };
    default:
      return state;
  }
};

export default houseLotsReducer;
