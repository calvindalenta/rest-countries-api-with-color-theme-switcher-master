import * as types from "./types";

const initialState = {
    value: []
};

const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.DATA_LOADED:
            return {...state, value: action.payload}
        default:
            return state;
    }
}

export default countriesReducer;