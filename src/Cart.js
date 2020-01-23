import React from "react"
import axios from "axios"
import CartItem from "./Cartitem"

class Cart extends React.Component{
    constructor(){
        super()
        this.state={
            cartitems:[]
        }
    }
    componentDidMount(){
        axios({
            method:"Post",
            data:{email:localStorage.email},
            url:"https://apibyashu.herokuapp.com/api/cart"
        }).then((response)=>{
            console.log("response from get cart api" , response)
            this.setState (
                {
                    cartitems : response.data.data
                }
            ) 
        },(error)=>{
            console.log("error from get cart api" , error)
        })
    }
    render(){
        return(
            <div>
                {this.state.cartitems.map((each) => {
                return <CartItem item={each.product} />
            })}

            </div>
        )
    }
}

export default Cart