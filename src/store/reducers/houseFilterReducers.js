import {
  UPDATE_HOUSE_FILTER_ROOMS_TO,
  UPDATE_HOUSE_FILTER_ROOMS_FROM,
  UPDATE_HOUSE_FILTER_PRICE_TO,
  UPDATE_HOUSE_FILTER_PRICE_FROM,
} from '../../constants/Actions';

const initialState = {
  roomsFrom: '1',
  roomsTo: '2',
  priceFrom: '200',
  priceTo: '500',
};

const houseFilterReducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_HOUSE_FILTER_ROOMS_FROM:
      return {
        ...state,
        roomsFrom: action.payload.roomsFrom,
      };
    case UPDATE_HOUSE_FILTER_ROOMS_TO:
      return {
        ...state,
        roomsTo: action.payload.roomsTo,
      };
    case UPDATE_HOUSE_FILTER_PRICE_FROM:
      return {
        ...state,
        priceFrom: action.payload.priceFrom,
      };
    case UPDATE_HOUSE_FILTER_PRICE_TO:
      return {
        ...state,
        priceTo: action.payload.priceTo,
      };
    default:
      return state;
  }
};

export default houseFilterReducers;
