import {FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAIL} from "../actions"

import axios from "axios"
export const getNews =(url) => async(dispatch)=> {
    dispatch({type:FETCH_NEWS_REQUEST })
    try {
        const {data} = await axios.get(url);
        console.log(data)
        
        const promises = data.slice(0,10).map(item=> 
            axios.get(`https://hacker-news.firebaseio.com/v0/item/${item}.json`)
        );
        console.log(promises)
        const result = await Promise.all(promises);
        const newArray = result.map(item=> {
        
            return item.data
        })
        console.log( "reduced array",newArray)
        dispatch({type:FETCH_NEWS_SUCCESS, payload: newArray})

    }
    catch(err) {
        console.log(err)
    }
    
}

export const getSingleNew =(url)=> async(dispatch) => {
    dispatch({type:FETCH_NEWS_REQUEST })
    try {
        await axios.get(url).then(({data})=>dispatch({type: FETCH_NEWS_SUCCESS, payload:data}))
    }
    catch(err) {
        console.log(err)
    }
    
}