import { FETCH_SETTINGS, FETCH_SETTINGS_FAIL, FETCH_SETTINGS_SUCCESS } from '../constants/Actions';

export const fetchSettings = () => {
    return {
        type: FETCH_SETTINGS,
    }
}

export const fetchSettingsSuccess = (data) => {
    return {
        type: FETCH_SETTINGS_SUCCESS,
        payload: data,
    }
}

export const fetchSettingsFail = (err) => {
    return {
        type: FETCH_SETTINGS_FAIL,
        error: err,
    }
}