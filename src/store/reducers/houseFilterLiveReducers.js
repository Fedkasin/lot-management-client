import {
  UPDATE_HOUSE_FILTER_LIVE_ROOMS,
  UPDATE_HOUSE_FILTER_LIVE_PRICE_TO,
  UPDATE_HOUSE_FILTER_LIVE_PRICE_FROM,
} from '../../constants/Actions';

const initialState = {
  rooms: ['1', '2'],
  priceFrom: '200',
  priceTo: '500',
};

const houseFilterLiveReducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_HOUSE_FILTER_LIVE_ROOMS:
      return {
        ...state,
        
      };
    case UPDATE_HOUSE_FILTER_LIVE_PRICE_TO:
      return {
        ...state,

      };
    case UPDATE_HOUSE_FILTER_LIVE_PRICE_FROM:
      return {
        ...state,

      };
    default:
      return state;
  }
};

export default houseFilterLiveReducers;
