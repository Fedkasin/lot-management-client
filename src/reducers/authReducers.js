import { FETCH_AUTH_KEY, FETCH_AUTH_KEY_SUCCESS, FETCH_AUTH_KEY_FAIL } from '../constants/Actions';

const initialState = {
    isFetching: false,
    key: null,
    login: null,
    password: null,
    error: null,
};

const authReducers = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_AUTH_KEY:
            return {
                ...state,
                isFetching: true,
                login: action.payload.login,
                password: action.payload.password,
            };
        case FETCH_AUTH_KEY_SUCCESS:
            return {
                ...state,
                error: null,
                key: action.payload.key,
                isFetching: false,
            };
        case FETCH_AUTH_KEY_FAIL:
            return {
                ...state,
                error: action.error,
                key: null,
                isFetching: false,
            };
        default:
            return state;
    }
};

export default authReducers;
