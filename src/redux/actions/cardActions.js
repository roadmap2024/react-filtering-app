import axios from 'axios';

import * as actions from '../constants'

export const fetchData = () => async (dispatch) => {
    try {
        const data = await axios.get('https://jsonplaceholder.typicode.com/posts');

        dispatch({
            type: actions.FETCH_DATA_SUCCESS,
            payload: data
        })
    } catch (error){
        dispatch({
            type: actions.FETCH_DATA_FAILDED,
            payload: error.message 
        })
        alert("Not Found Data");
    }
}

export const searchData = (query) => (dispatch, getState) => {
    const { CardReducers } = getState();
    
    const searchResult = CardReducers.searchResult.filter((post) => {
        return post.title.toLowerCase().includes(query.toLowerCase())
    })

    console.log(searchResult)

    dispatch({type:actions.SEARCH_RESULT, payload: searchResult})
}