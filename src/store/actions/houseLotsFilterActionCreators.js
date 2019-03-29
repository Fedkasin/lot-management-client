import {
  UPDATE_HOUSE_FILTER_ROOMS_TO,
  UPDATE_HOUSE_FILTER_ROOMS_FROM,
  UPDATE_HOUSE_FILTER_PRICE_TO,
  UPDATE_HOUSE_FILTER_PRICE_FROM,
} from '../../constants/Actions';

export const updateHouseFilterRoomsTo = value => ({
  type: UPDATE_HOUSE_FILTER_ROOMS_TO,
  payload: {
    roomsTo: value,
  },
});

export const updateHouseFilterRoomsFrom = value => ({
  type: UPDATE_HOUSE_FILTER_ROOMS_FROM,
  payload: {
    roomsFrom: value,
  },
});

export const updateHouseFilterPriceTo = value => ({
  type: UPDATE_HOUSE_FILTER_PRICE_TO,
  payload: {
    priceTo: value,
  },
});

export const updateHouseFilterPriceFrom = value => ({
  type: UPDATE_HOUSE_FILTER_PRICE_FROM,
  payload: {
    priceFrom: value,
  },
});
