import {
  FETCH_PROFILE,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAIL,
  SET_DEVICE_STATUS_REAL,
  SET_DEVICE_STATUS_VIRTUAL,
  SET_GLOBAL_NOTIFY_STATUS_GRANTED,
  SET_GLOBAL_NOTIFY_STATUS_DENIED,
  SET_LOCAL_NOTIFY_STATUS_GRANTED,
  SET_LOCAL_NOTIFY_STATUS_DENIED,
} from '../../constants/Actions';

const initialState = {
  isLoading: false,
  profile: null,
  error: null,
  isDeviceReal: false,
  isGlobalNotifyGranted: false,
  isLocalNotifyGranted: false,
};

const authReducers = (state = initialState, action) => {
  console.log('[REDUX]:', action.type);
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
    case SET_DEVICE_STATUS_REAL:
      return {
        ...state,
        isDeviceReal: true,
      };
    case SET_DEVICE_STATUS_VIRTUAL:
      return {
        ...state,
        isDeviceReal: false,
      };
    case SET_GLOBAL_NOTIFY_STATUS_GRANTED:
      return {
        ...state,
        isGlobalNotifyGranted: true,
      };
    case SET_GLOBAL_NOTIFY_STATUS_DENIED:
      return {
        ...state,
        isGlobalNotifyGranted: false,
      };
    case SET_LOCAL_NOTIFY_STATUS_GRANTED:
      return {
        ...state,
        isLocalNotifyGranted: true,
      };
    case SET_LOCAL_NOTIFY_STATUS_DENIED:
      return {
        ...state,
        isLocalNotifyGranted: false,
      };
    default:
      return state;
  }
};

export default authReducers;
