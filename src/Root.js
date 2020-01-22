import React from "react"
import {BrowserRouter as Router , Route} from "react-router-dom"
import Login from "./login"
import Navbar from "./navbar"
import Signup from "./Signup"
import HomeScreen from "./app1"





class Root extends React.Component{
    constructor(){
        super()
    }

    render() {
        return(
            <Router>
                <Navbar/>
                <Route exact path="/" component={HomeScreen} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
            </Router>
        )
    }
}

export default Root