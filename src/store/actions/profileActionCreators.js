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

export const fetchProfile = () => ({
  type: FETCH_PROFILE,
});

export const fetchProfileSuccess = profile => ({
  type: FETCH_PROFILE_SUCCESS,
  payload: profile,
});

export const fetchProfileFail = err => ({
  type: FETCH_PROFILE_FAIL,
  error: err,
});

export const setDeviceStatus = status => ({
  type: status ? SET_DEVICE_STATUS_REAL : SET_DEVICE_STATUS_VIRTUAL,
});

export const setGlobalNotifyStatus = status => ({
  type: status ? SET_GLOBAL_NOTIFY_STATUS_GRANTED : SET_GLOBAL_NOTIFY_STATUS_DENIED,
});

export const setLocalNotifyStatus = status => ({
  type: status ? SET_LOCAL_NOTIFY_STATUS_GRANTED : SET_LOCAL_NOTIFY_STATUS_DENIED,
});
