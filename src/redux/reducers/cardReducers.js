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
        case actions.SORT_ASC_RESULT:
            const sortAsc = action.payload.sort((a, b) => (a.title > b.title ? 1 : a.title < b.title ? -1 : 0))
            return {
                ...state,
                post: sortAsc
            }
        case actions.SORT_DESC_RESULT:
            const sortDesc = action.payload.sort((a,b) => (a.title < b.title ? 1 : a.title > b.title ? -1 : 0))
            return {
                ...state,
                post: sortDesc
            }
        default:
            return state;
    }
}