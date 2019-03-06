import { FETCH_CAR_LOTS, FETCH_CAR_LOTS_SUCCESS, FETCH_CAR_LOTS_FAIL } from '../../constants/Actions';

const initialState = {
  isFetching: false,
  carLots: [],
  page: 0,
  itemsPerPage: 10,
  error: null,
};

const carLotsReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAR_LOTS:
      return {
        ...state,
        isFetching: true,
        page: action.payload.page,
        itemsPerPage: action.payload.itemsPerPage,
      };
    case FETCH_CAR_LOTS_SUCCESS:
      return {
        ...state,
        error: null,
        carLots: [...state.carLots, ...action.payload],
        isFetching: false,
      };
    case FETCH_CAR_LOTS_FAIL:
      return {
        ...state,
        error: action.error,
        carLots: [],
        isFetching: false,
      };
    default:
      return state;
  }
};

export default carLotsReducers;
