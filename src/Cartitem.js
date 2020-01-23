import React from "react"

var element

class CartItem extends React.Component{
    constructor(){
        super()
    }

    componentWillMount(){
        if(this.props.item)
        {
             element = <div style={{height:"100px"}} className="row">
            <div className="col-md-8">
              <img src={this.props.item.image} style={{height:"50px",width:"50px"}} />
              <label>{this.props.item.name}</label>
              <label>{this.props.item.price}</label>
              </div>
              <button className="btn btn-danger">Remove</button>
             <div className="col-md-4"></div> 
             </div> 
        }
        else{
             element = <div></div>
        }
    }
    render(){
        return(
         element
        )
    }
}

export default CartItem