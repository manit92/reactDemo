
import React, { Component } from "react";
import { Redirect, Route } from 'react-router-dom';



// var apiurl = 'https://learningmeanwithashu.herokuapp.com/api/product/' + this.state.productid;
class ProductDetails extends Component {
    Addtocart = () => {
        if (localStorage.getItem('user')) {
            this.props.dispatch({
                type: "ADDTOCART",
                payload: this.state.product
            })
            // console.log("checking", Store.getState());
            this.props.history.push('/cart');

        } else {
            this.props.history.push('/login');
        }
    }
    constructor() {
        super();
        this.state = {
            product: {
                name: "Canon EOS 200D DSLR Camera EF-S18-55 IS STM EF-S 55-250 IS STM (Black)",
                image: "data:image/jpeg;base64,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",
                price: 47999
            },
            productid: null

        }
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