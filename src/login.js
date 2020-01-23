import React from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import {connect} from "react-redux"

class Login extends React.Component{

    constructor() {
        super()
        this.state = {
            admin : {}
        }
    }

    updateValue = (event) => {
        this.setState({
            admin:{
                ...this.state.admin,
                email: event.target.value
            }
        })
    }

    updateValueP = (event) => {
        this.setState({
            admin:{
                ...this.state.admin,
                password: event.target.value
            }
        })
        console.log("...", this)
    }

    login = () => {
        axios({
            url:'https://apibyashu.herokuapp.com/api/login',
            data:this.state.admin,
            method: "POST"
        }).then((response)=>{
            console.log("response from signup api", response)
            if(response.data.token){
                this.props.dispatch({
                    type: 'LOGIN',
                    payload: {
                        user: response.data
                    }
                })
                localStorage.email = response.data.email
                this.props.history.push('/')
            } else {
                alert("Invalid Login")
            }
        },(error)=>{
            console.log("error from signup api", error)
        })
    }

    render(){
        
            return(
                <div>
                    <input type="email" onChange={this.updateValue} id="name" placeholder="name"></input>
                    {this.state.admin.email}
                    <input type="password" onChange={this.updateValueP} id="password" placeholder="***"></input>
                    {this.state.admin.password}
                    <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.login}> login</button>
                    <Link to="/forgot"> <button class="btn btn-outline-success my-2 my-sm-0" >Forgot password</button></Link>
                </div>
            )
    
        
    }
}

export default connect()(Login)