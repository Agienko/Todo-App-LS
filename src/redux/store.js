import { combineReducers, createStore } from "redux";
import tasksListsReducer from "./reducers/tasksListsReducer";

const reducers = combineReducers({
    tasksLists: tasksListsReducer
})

const store = createStore(reducers)
export default store