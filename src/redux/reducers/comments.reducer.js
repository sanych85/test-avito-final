import {FETCH_COMMENT_REQUEST,FETCH_COMMENT_SUCCESS,FETCH_COMMENT_FAIL } from "../actions"
const initialState =  {
    comments:[],
    loading: false
}

const newsReducer = (state=initialState, action)=> {
 switch(action.type) {
    case FETCH_COMMENT_REQUEST: {
        return {...state, loading: true}
     }
     case FETCH_COMMENT_SUCCESS: {
        return {...state, comments: action.payload, loading: false}
     }
     default : return state
 }
}

export default newsReducer;