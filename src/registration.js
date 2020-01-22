import React from "react"
import axios from "axios"

class Registration extends React.Component{
    
    constructor(){
            super()
            this.state = {
                user : {}
            }
    }
    
    signup = ()=> {
        console.log("this is arrow function", this.state.user)
        axios({
            url:'https://apibyashu.herokuapp.com/api/register',
            data:this.state.user,
            method: "POST"
        }).then((response)=>{
            console.log("response from signup api", response)
        },(error)=>{
            console.log("error from signup api", error)
        })
    }

    handleName = (event)=>{
        console.log("...", event.target.value)
        // this.user.name = event.target.value
        this.setState({
            user:{
                ...this.state.user,
                name: event.target.value
            }
        })
    }

    handlePassword = (event)=>{
        console.log("...", event.target.value)
        // this.user.password = event.target.value
        this.setState({
            user:{
                ...this.state.user,
                password: event.target.value
            }
        })
    }

    handleEmail = (event)=>{
        console.log("...", event.target.value)
        //this.user.email = event.target.value
        this.setState({
            user:{
                ...this.state.user,
                email: event.target.value
            }
        })
    }
    
    render(){
         return(<div>
            <input type="text" onChange={this.handleName} className="form-control" placeholder="name"></input>
            {this.state.user.name}
            <input type="password" onChange={this.handlePassword} className="form-control" placeholder="password"></input>
            <input type="email" onChange={this.handleEmail} className="form-control" placeholder="email"></input>
            <button onClick={this.signup}>signup</button>
         </div>
         )
    }
}

export default Registration
