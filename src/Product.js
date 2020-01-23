
import React from "react"
import { withRouter } from "react-router-dom"


export function Product(props){

    let showProduct = () => {
        alert(props.product.productid + '....' + props.product.name)
        localStorage.productid = props.product.productid
        props.history.push('/details/' + props.product.productid)
    }
    return ( <div onClick={showProduct}>
            { props.product  && <div class="card " style={{width: "18rem"}}>
            <img class="card-img-top" src={props.product.image} alt="Card image cap"></img>
            <div class="card-body">
            <p class="card-text">{props.product.name}</p>
            <p class="card-text">{props.product.price}</p>
            </div>
        </div>}
    </div>
        
    )
}

export default withRouter(Product)