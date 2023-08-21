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