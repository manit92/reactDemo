import React from "react"
import axios from "axios"
import Product from "./Product"

class ProductList extends React.Component{

    constructor(){
        super()
        this.state = {
            products: []
        }
    }

    componentWillMount() {
        axios({
            url:'https://apibyashu.herokuapp.com/api/allproducts',
            method: "get"
        }).then((response)=>{
            console.log("response from all products api", response)
            this.setState(
                {
                    products: response.data.data
                }
            )
        },(error)=>{
            console.log("error from all products api", error)
        })
    }
    render(){
        return(
            <div>
                Here we will display our products
                {
                    this.state.products.map((each)=>{
                        return <Product product={each} />
                    })
                }
            </div>
        )
    }
}

export default ProductList
