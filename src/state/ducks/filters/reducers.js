import * as types from './types';

const initialState = {
    keyword: "",
    region: ""
}

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_KEYWORD_FILTER:
            return { ...state, keyword: action.payload }
        case types.SET_REGION_FILTER:
            return { ...state, region: action.payload }
        default:
            return state;
    }
}

export default filtersReducer;