import { APP_READY } from '../../constants/Actions';

const initialState = {
  isAppReady: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_READY:
      return {
        ...state,
        isAppReady: true,
      };
    default:
      return state;
  }
};

export default rootReducer;
