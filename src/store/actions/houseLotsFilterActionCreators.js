import {
  UPDATE_HOUSE_FILTER_PRICE_TO,
  UPDATE_HOUSE_FILTER_PRICE_FROM,
  ADD_ROOM_COUNT,
} from '../../constants/Actions';

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


export const addRoomCount = (value) => ({
  type: ADD_ROOM_COUNT,
  payload: {
    roomFilters: value,
  },
});
