import {
  UPDATE_HOUSE_WATCH_FILTER_ROOMS_FROM,
  UPDATE_HOUSE_WATCH_FILTER_ROOMS_TO,
  UPDATE_HOUSE_WATCH_FILTER_PRICE_FROM,
  UPDATE_HOUSE_WATCH_FILTER_PRICE_TO,
  UPDATE_HOUSE_WATCH_FILTER_APPLY,
  ADD_ROOM_COUNT,
} from '../../constants/Actions';

const initialState = {
  roomsFrom: '2',
  roomsTo: '3',
  priceFrom: '400',
  priceTo: '500',
};

const houseFilterLiveReducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_HOUSE_WATCH_FILTER_ROOMS_FROM:
      return {
        ...state,
        roomsFrom: action.payload.roomsFrom,
        roomFilters: action.payload.roomFilters,
      };
    case UPDATE_HOUSE_WATCH_FILTER_ROOMS_TO:
      return {
        ...state,
        roomsTo: action.payload.roomsTo,
        roomFilters: action.payload.roomFilters,
      };
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
    case ADD_ROOM_COUNT:
      return {
        ...state,
        roomFilters: action.payload.roomFilters,
      };
    default:
      return state;
  }
};

export default houseFilterLiveReducers;
