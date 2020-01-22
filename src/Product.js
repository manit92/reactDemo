
import React from "react"


export default function(props){
    return ( <div>
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
