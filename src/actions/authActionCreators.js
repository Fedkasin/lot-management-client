import { FETCH_AUTH_KEY, FETCH_AUTH_KEY_SUCCESS, FETCH_AUTH_KEY_FAIL } from '../constants/Actions';

export const fetchAuthKey = (payload) => {
    return {
        type: FETCH_AUTH_KEY,
        payload: {
            login: payload.login,
            password: payload.password,
        }
    }
};

export const fetchAuthKeySuccess = (data) => {
    return {
        type: FETCH_AUTH_KEY_SUCCESS,
        payload: data,
    }
};

export const fetchAuthKeyFail = (err) => {
    return {
        type: FETCH_AUTH_KEY_FAIL,
        error: err,
    }
};