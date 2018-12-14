import { FETCH_LOTS, FETCH_LOTS_SUCCESS, FETCH_LOTS_FAIL } from '../constants/Actions';

const initialState = {
    isFetching: false,
    lots: [],
    page: 0,
    itemsPerPage: 10,
    error: null,
}

const lotsReducers = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_LOTS:
            return {
                ...state,
                isFetching: true,
                page: action.payload.page,
                itemsPerPage: action.payload.itemsPerPage,
            }
        case FETCH_LOTS_SUCCESS:
            return {
                ...state,
                error: null,
                lots: [...state.lots, ...action.payload],
                isFetching: false,
            }
        case FETCH_LOTS_FAIL:
            return {
                ...state,
                error: action.error,
                lots: [],
                isFetching: false,
            }
        default: 
            return state;
    }
}

export default lotsReducers;