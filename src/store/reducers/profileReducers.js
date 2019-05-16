import {
  LOAD_PROFILE,
  LOAD_PROFILE_SUCCESS,
  LOAD_PROFILE_FAIL,
} from '../../constants/Actions';

const initialState = {
  isLoading: false,
  profile: null,
  error: null,
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROFILE:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_PROFILE_SUCCESS:
      return {
        ...state,
        profile: JSON.parse(action.payload),
        error: null,
        isLoading: false,
      };
    case LOAD_PROFILE_FAIL:
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
