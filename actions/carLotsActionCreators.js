import { FETCH_CAR_LOTS, FETCH_CAR_LOTS_SUCCESS, FETCH_CAR_LOTS_FAIL } from '../constants/Actions';

export const fetchCarLots = (payload) => {
    return {
        type: FETCH_CAR_LOTS,
        payload: {
            page: payload.page,
            itemsPerPage: payload.itemsPerPage,
        }
    }
};

export const fetchCarLotsSuccess = (data) => {
    return {
        type: FETCH_CAR_LOTS_SUCCESS,
        payload: data,
    }
};

export const fetchCarLotsFail = (err) => {
    return {
        type: FETCH_CAR_LOTS_FAIL,
        error: err,
    }
};
