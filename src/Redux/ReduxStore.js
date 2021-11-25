import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import choosingPageReducer from "./ChoosingPageReducer";
import TopicPageReducer from "./TopicPageReducer";
import MainReducer from "./MainReduser";
import SearchReducer from "./SearchReducer";


let reducers = combineReducers({
    SearchPage :SearchReducer,
    MainVariables: MainReducer,
    topicPage: TopicPageReducer,
    choosingPage: choosingPageReducer,
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store
export default store