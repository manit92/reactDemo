import store from "./store"




export let  AuthReducer =(state = {}, action) => {
        switch(action.type){
            case "LOGIN" : {
                state = {...state}
                state["isloggedin"] = true;
                return state
            }
            case "LOGOUT" : {
                state = {...state}
                delete state["isloggedin"]
                return state
            }
            default : return state
        }
}