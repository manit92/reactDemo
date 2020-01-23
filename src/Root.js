import React from "react"
import {BrowserRouter as Router , Route} from "react-router-dom"
import Login from "./login"
import Navbar from "./navbar"
import Signup from "./Signup"
import HomeScreen from "./app1"
import Forgot from "./Forgot"
import ProductDetails from "./ProductDetails"
import Cart from "./Cart"





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
                <Route exact path="/forgot" component={Forgot} />
                <Route exact path="/details/:id" component={ProductDetails} />
                <Route exact path="/Cart" component={Cart} />
                </Router>
        )
    }
}

export default Root