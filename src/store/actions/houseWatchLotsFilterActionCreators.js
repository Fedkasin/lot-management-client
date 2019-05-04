import {
  UPDATE_HOUSE_WATCH_FILTER_ROOMS_FROM,
  UPDATE_HOUSE_WATCH_FILTER_ROOMS_TO,
  UPDATE_HOUSE_WATCH_FILTER_PRICE_FROM,
  UPDATE_HOUSE_WATCH_FILTER_PRICE_TO,
  UPDATE_HOUSE_WATCH_FILTER_APPLY,
  ADD_ROOM_COUNT,
} from '../../constants/Actions';

export const updateHouseWatchFilterRoomsTo = (value, newRoomFilters) => ({
  type: UPDATE_HOUSE_WATCH_FILTER_ROOMS_TO,
  payload: {
    roomsTo: value,
    roomFilters: newRoomFilters,
  },
});

export const updateHouseWatchFilterRoomsFrom = (value, newRoomFilters) => ({
  type: UPDATE_HOUSE_WATCH_FILTER_ROOMS_FROM,
  payload: {
    roomsFrom: value,
    roomFilters: newRoomFilters,
  },
});

export const updateHouseWatchFilterPriceTo = value => ({
  type: UPDATE_HOUSE_WATCH_FILTER_PRICE_TO,
  payload: {
    priceTo: value,
  },
});

export const updateHouseWatchFilterPriceFrom = value => ({
  type: UPDATE_HOUSE_WATCH_FILTER_PRICE_FROM,
  payload: {
    priceFrom: value,
  },
});

export const updateHouseWatchFilterApply = filters => ({
  type: UPDATE_HOUSE_WATCH_FILTER_APPLY,
  payload: {
    filters,
  },
});

export const addRoomCount = value => ({
  type: ADD_ROOM_COUNT,
  payload: {
    roomFilters: value,
  },
});
