import {createStore} from "redux"
import {AuthReducer} from "./reducers"


let store = createStore(AuthReducer);


store.dispatch({
    type:'LOGIN'
})

console.log(".......", store.getState())

export default store