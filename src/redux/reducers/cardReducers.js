import * as actions from '../constants';

const initialState = {
    post: [],
    searchResult: [],
    page: 1
}

export const CardReducers = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_DATA_SUCCESS:
            return {
                ...state,
                post: action.payload.data,
                    searchResult: action.payload.data
            }
        case actions.SEARCH_RESULT:
            return {
                ...state,
                post: action.payload
            }
        default:
            return state;
    }
}