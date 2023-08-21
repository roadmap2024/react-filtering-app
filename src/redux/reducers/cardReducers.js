import * as actions from '../constants';

const initialState = {
    post: [],
    seachResult: [],
    page: 1
}

export const CardReducers = (state = initialState, action) => {
    switch(action.type) {
        case actions.FETCH_DATA_SUCCESS:
            return {
                ...state,
                post: action.payload.data,
                searchResult: action.payload.data
            }
        default:
            return state;
    }
}