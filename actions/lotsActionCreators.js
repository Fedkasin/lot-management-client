import { FETCH_LOTS, FETCH_LOTS_SUCCESS, FETCH_LOTS_FAIL } from '../constants/Actions';

export const fetchLots = (payload) => {
    return {
        type: FETCH_LOTS,
        payload: {
            page: payload.page,
            itemsPerPage: payload.itemsPerPage,
        }
    }
}

export const fetchLotsSuccess = (data) => {
    return {
        type: FETCH_LOTS_SUCCESS,
        payload: data,
    }
}

export const fetchLotsFail = (err) => {
    return {
        type: FETCH_LOTS_FAIL,
        error: err,
    }
}
