import React from "react"
import Nav from "./navbar"
import king from './Carousel'
import Carousel from "./Carousel"
import Product  from "./Product"
import Dummyproduct from "./nine"
import Signup from "./Signup"
import Registration from "./registration"
import Login from "./login"

let product = {
    imageUrl : "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQbcNjM9UENr1yYiDxGVL7vXSwj3_QvkBtV9nQELlQyevptkaQMidoW9Dsgfch3HHQ_DRYeGZeeiw&usqp=CAc",
    name : "kids",
    price : 500 
}
let pet = {
    imageUrl : "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQbcNjM9UENr1yYiDxGVL7vXSwj3_QvkBtV9nQELlQyevptkaQMidoW9Dsgfch3HHQ_DRYeGZeeiw&usqp=CAc",
    name : "kids",
    price : 500 
}
let game = {
    imageUrl : "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQbcNjM9UENr1yYiDxGVL7vXSwj3_QvkBtV9nQELlQyevptkaQMidoW9Dsgfch3HHQ_DRYeGZeeiw&usqp=CAc",
    name : "kids",
    price : 500 
}

function Main(){
    return (
        <div>
            this is our first component
            
            
            <Registration />
            <Signup />
            <Nav />
            <Carousel />
            <div class="row">
            {Dummyproduct.map(function(each){
                return <Product product={each} />
            })}

            </div>
            <Login />
        </div>
    )
}


export default Main