import {FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAIL} from "../actions"

import axios from "axios"
export const getNews =(url) => async(dispatch)=> {
    dispatch({type:FETCH_NEWS_REQUEST })
    try {
        const {data} = await axios.get(url);

        const promises = data.slice(0,100).map(item=> 
            axios.get(`https://hacker-news.firebaseio.com/v0/item/${item}.json`)
        );
     
        const result = await (await Promise.all(promises)).map(item=>item.data);

        dispatch({type:FETCH_NEWS_SUCCESS, payload: result})

    }
    catch(err) {
        dispatch({type: FETCH_NEWS_FAIL, payload:err})
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