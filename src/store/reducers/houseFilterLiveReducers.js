import {
  UPDATE_HOUSE_WATCH_FILTER_PRICE_FROM,
  UPDATE_HOUSE_WATCH_FILTER_PRICE_TO,
  UPDATE_HOUSE_WATCH_FILTER_APPLY,
  ADD_WATCH_ROOM_COUNT,
} from '../../constants/Actions';

const initialState = {
  priceFrom: '400',
  priceTo: '500',
  roomFilters: [],
};

const houseFilterLiveReducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_HOUSE_WATCH_FILTER_PRICE_FROM:
      return {
        ...state,
        priceFrom: action.payload.priceFrom,
      };
    case UPDATE_HOUSE_WATCH_FILTER_PRICE_TO:
      return {
        ...state,
        priceTo: action.payload.priceTo,
      };
    case UPDATE_HOUSE_WATCH_FILTER_APPLY:
      return {
        ...state,
        filters: action.payload.filters,
      };
    case ADD_WATCH_ROOM_COUNT:
      return {
        ...state,
        roomFilters: action.payload.roomFilters,
      };
    default:
      return state;
  }
};

export default houseFilterLiveReducers;
