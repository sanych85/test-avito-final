import { FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAIL} from "../actions"
const initialState =  {
    news:[],
    loading: false,
    error: false
}

const newsReducer = (state=initialState, action)=> {
 switch(action.type) {
    case FETCH_NEWS_REQUEST: {
        return {...state, loading: true}
     }
     case FETCH_NEWS_SUCCESS: {
         const newArray = action.payload.sort((a,b)=> b.time-a.time)
        return {...state, news: newArray, loading: false}
     }
     case FETCH_NEWS_FAIL: {
         
        return {...state, loading: false, error:action.payload}
     }

     default : return state
 }
}

export default newsReducer;