import * as types from './types';

export const setKeyword = (keyword) => {
    return {
        type: types.SET_KEYWORD_FILTER,
        payload: keyword
    }
}

export const setRegion = (region) => {
    return {
        type: types.SET_REGION_FILTER,
        payload: region
    }
}