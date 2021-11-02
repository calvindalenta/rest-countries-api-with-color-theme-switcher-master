export const selectFilterState = (state) => state.filters
export const selectRegionFilter = (state) => selectFilterState(state).region
export const selectKeywordFilter = (state) => selectFilterState(state).keyword