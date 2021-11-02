import * as types from './types';

const initialState = {
    isDark: true,
}

const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_THEME:
            return { ...state, isDark: !state.isDark }
        default:
            return state;
    }
}

export default filtersReducer;