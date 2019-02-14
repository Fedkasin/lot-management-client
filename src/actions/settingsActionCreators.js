import {
  FETCH_SETTINGS, FETCH_SETTINGS_FAIL, FETCH_SETTINGS_SUCCESS, CHANGE_SETTING,
} from '../constants/Actions';

export const fetchSettings = data => ({
  type: FETCH_SETTINGS,
  payload: data,
});

export const fetchSettingsSuccess = data => ({
  type: FETCH_SETTINGS_SUCCESS,
  payload: data,
});

export const fetchSettingsFail = err => ({
  type: FETCH_SETTINGS_FAIL,
  error: err,
});

export const changeSetting = data => ({
  type: CHANGE_SETTING,
  payload: data,
});
