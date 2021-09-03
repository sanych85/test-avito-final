import { FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAIL,FETCH_SINGLE_NEWS_REQUEST, FETCH_SINGLE_NEWS_SUCCESS, FETCH_SINGLE_NEWS_FAIL } from "../actions"
const initialState =  {
    news:[],
    loading: false
}

const newsReducer = (state=initialState, action)=> {
 switch(action.type) {
    case FETCH_NEWS_REQUEST: {
        return {...state, loading: true}
     }
     case FETCH_NEWS_SUCCESS: {
         const newArray = action.payload.sort((a,b)=> a.time-b.time).slice(0,10)
        return {...state, news: newArray, loading: false}
     }

     default : return state
 }
}

export default newsReducer;