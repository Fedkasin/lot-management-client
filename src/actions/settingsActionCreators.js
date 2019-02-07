import { FETCH_SETTINGS, FETCH_SETTINGS_FAIL, FETCH_SETTINGS_SUCCESS, CHANGE_SETTING } from '../constants/Actions';

export const fetchSettings = data => {
    return {
        type: FETCH_SETTINGS,
        payload: data,
    }
};

export const fetchSettingsSuccess = data => {
    return {
        type: FETCH_SETTINGS_SUCCESS,
        payload: data,
    }
};

export const fetchSettingsFail = err => {
    return {
        type: FETCH_SETTINGS_FAIL,
        error: err,
    }
};

export const changeSetting = (data) => {
    return {
        type: CHANGE_SETTING,
        payload: data
    }
};
