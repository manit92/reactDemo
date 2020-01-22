import React from "react"
import axios from "axios"

class ForgotPassword extends React.Component{

    constructor() {
        super()
        
    }


    render(){
        
            return(
                <div>
                    <input className="form-control" placeholder="enter your email"></input>
                    <button className="btn btn-primary">Submit</button>
                </div>
            )
    
        
    }
}

export default ForgotPassword 