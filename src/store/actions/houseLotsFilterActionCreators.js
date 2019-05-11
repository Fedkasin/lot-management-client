import {
  UPDATE_HOUSE_FILTER_PRICE_TO,
  UPDATE_HOUSE_FILTER_PRICE_FROM,
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
