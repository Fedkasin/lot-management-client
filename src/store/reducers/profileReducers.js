import {
  FETCH_PROFILE,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAIL,
} from '../../constants/Actions';

const initialState = {
  isLoading: false,
  profile: null,
  error: null,
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        profile: JSON.parse(action.payload),
        error: null,
        isLoading: false,
      };
    case FETCH_PROFILE_FAIL:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authReducers;
