import { createStore,compose, applyMiddleware,combineReducers  } from "redux";
import newsReducer from "./reducers/newsReducers"
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer=combineReducers({
    news: newsReducer
}) 


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default  store;