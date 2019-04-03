import {
  UPDATE_HOUSE_WATCH_FILTER_ROOMS_FROM,
  UPDATE_HOUSE_WATCH_FILTER_ROOMS_TO,
  UPDATE_HOUSE_WATCH_FILTER_PRICE_FROM,
  UPDATE_HOUSE_WATCH_FILTER_PRICE_TO,
} from '../../constants/Actions';

export const updateHouseWatchFilterRoomsTo = value => ({
  type: UPDATE_HOUSE_WATCH_FILTER_ROOMS_TO,
  payload: {
    roomsTo: value,
  },
});

export const updateHouseWatchFilterRoomsFrom = value => ({
  type: UPDATE_HOUSE_WATCH_FILTER_ROOMS_FROM,
  payload: {
    roomsFrom: value,
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
