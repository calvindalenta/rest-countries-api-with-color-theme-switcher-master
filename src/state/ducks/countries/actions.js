import { selectIsDataLoaded } from "./selectors";
import * as types from "./types"

export const fetchCountries = () => async (dispatch, getState) => {
    const shouldFetch = !selectIsDataLoaded(getState())
    if (!shouldFetch) return

    const res = await fetch("https://restcountries.com/v2/all")
    const json = await res.json()
    dispatch({
        type: types.DATA_LOADED,
        payload: json
    })
};