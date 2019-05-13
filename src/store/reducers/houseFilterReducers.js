import {
  UPDATE_HOUSE_FILTER_PRICE_TO,
  UPDATE_HOUSE_FILTER_PRICE_FROM,
  ADD_ROOM_COUNT,
} from '../../constants/Actions';

const initialState = {
  priceFrom: '200',
  priceTo: '500',
  roomFilters: [],
};

const houseFilterReducers = (state = initialState, action) => {
  switch (action.type) {
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
    case ADD_ROOM_COUNT:
      return {
        ...state,
        roomFilters: action.payload.roomFilters,
      };
    default:
      return state;
  }
};

export default houseFilterReducers;
