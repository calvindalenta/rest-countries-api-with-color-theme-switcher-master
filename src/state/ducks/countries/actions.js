import * as types from "./types"

export const getAllCountries = () => (dispatch, getState) => {
    fetch("https://restcountries.com/v2/all").then(res => {
        res.json().then(json => {
            dispatch({
                type: types.DATA_LOADED,
                payload: json
            })
        });
    });
};