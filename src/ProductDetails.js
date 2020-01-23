
import React, { Component } from "react";
import { Redirect, Route } from 'react-router-dom';
import axios from "axios"



// var apiurl = 'https://learningmeanwithashu.herokuapp.com/api/product/' + this.state.productid;
class ProductDetails extends Component {
    Addtocart = () => {
        // if (localStorage.getItem('user')) {
        //     this.props.dispatch({
        //         type: "ADDTOCART",
        //         payload: this.state.product
        //     })
        //     // console.log("checking", Store.getState());
        //     this.props.history.push('/cart');

        // } else {
        //     this.props.history.push('/login');
        // }

        var requestObj = {
            productid: this.state.product.productid,
            email:localStorage.email,
            product:{
                name: this.state.product.name,
                image: this.state.product.image,
                price: this.state.product.price
            }
        }
        console.log("the value aman", requestObj)
        axios({
            url:'https://apibyashu.herokuapp.com/api/addtocart',
            data:requestObj,
            method: "POST"
        }).then((response)=>{
            console.log("response from addtocart api", response)
                this.props.history.push('/Cart')
         },(error)=>{
            console.log("error from signup api", error)
        })
    }
    constructor() {
        super();
        this.state = {
            product: {}
    }

}

    componentDidMount() {
        // var productid = localStorage.productid
        var productid = this.props.match.params.id
    axios({
        url:'https://apibyashu.herokuapp.com/api/product/' + productid,
        method: "get"
    }).then((response)=>{
        console.log("response from all  products detail api", response)
        this.setState(
            {
                product: response.data.data
            }
        )
    },(error)=>{
        console.log("error from products detail api", error)
    })
    }
    render() {
        return <div className="container" style={{ padding: "20px" }}>

            <div className="row">
                <div className="col-md-6">
                    {/* {this.state.productid} */}
                    <img src={this.state.product.image} alt="image not avilable" style={{ width: "416px", height: "416px" }} /><br></br>
                    <button onClick={this.Addtocart} className="btn btn-outline-info col-md-5" style={{ padding: "10px" }}>Add to Cart</button>
                    <button className="btn btn-outline-success col-md-5" style={{ padding: "10px" }} >Buy now</button>
                </div>
                <div className="col-md-6">

                    <table>
                        <tr>
                            <td><h3>{this.state.product.name}</h3></td>
                        </tr>
                        <tr>
                            <td><h3>Rs.{this.state.product.price}</h3></td>
                        </tr>
                        <tr>

                            <td><span><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90" width="18" height="18" class="_3Amlen" /></span>No cost EMI ₹8,000/month. Standard EMI also availableView Plans</td></tr>

                        <tr>
                            <td><span><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" class="_3Amlen" /></span> Bank Offer10% Instant Discount* with Axis Bank Credit and Debit CardsT&C</td></tr>
                        <tr>
                            <td><span><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" class="_3Amlen" /></span>Bank Offer10% off* with Axis Bank Buzz Credit CardT&C</td></tr>
                        <tr>
                            <td><span><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" class="_3Amlen" /></span>Free 16GB SD Card & Camera Bag with this DSLR</td></tr>
                        <tr><td className="row"><span className="col-md-4">Seller</span>
                            <span className="col-md-4"> RetailNet</span>
                        </td></tr>
                        <tr>
                            <td className="row">
                                <span className="col-md-4">Highlights</span>

                                <td><span className="col-md-4"></span><ul><li>Effective Pixels: 24.2 MP</li>
                                    <li><span className="col-md-4">Sensor Type: CMOS</span></li>
                                    <li><span className="col-md-4"></span>WiFi Available</li>
                                    <li><span className="col-md-4"></span>1080p at 60p + Time-Lapse</li></ul></td>

                            </td></tr>
                    </table>
                </div>
            </div >

        </div >
    };
}
export default ProductDetails