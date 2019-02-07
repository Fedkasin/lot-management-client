import { SET_ADDR } from "../constants/Actions";

export const setAddr = value => {
    return {
        type: SET_ADDR,
        payload: value,
    }
};
