import React from "react"

class Signup extends React.Component{
    constructor(){
            super()
            this.state = {
                seatreserved: 0
            }
    }
    
    reserve = ()=> {
        console.log("this is arrow function", this)
        this.setState({
                seatreserved: ++this.state.seatreserved
        })
    }
    
    abc() {
        console.log("this is arrow function", this)
    }
    
    render(){
         return(<div>
            {this.state.seatreserved}
            <button onClick={this.reserve}>Reserve</button>
            <button onClick={this.abc.bind(this)}>Reserve </button>
         </div>
         )
    }
}

export default Signup
