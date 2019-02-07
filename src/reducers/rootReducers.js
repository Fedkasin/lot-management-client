import { SET_ADDR } from '../constants/Actions';

const initialState = {
    addr: null,
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ADDR:
            return {
                ...state,
                addre: action.payload,
            };
        default:
            return state;
    }
};

export default rootReducer;
