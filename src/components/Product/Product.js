import React, { useState } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
    
    const {name,img,price,stock,seller,key}=props.product;
    


    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-details">
                <Link to={"/product/"+key}><h4>{name}</h4></Link>
                <p>Price : ${price}</p>
                <p><small>Quantity : {stock}</small></p>
                <p><small>By : {seller}</small></p>
                <div style={{display:'flex'}}>
                    <button className="main-button" onClick={()=>props.handleToCart(props.product)}> <FaCartPlus/> add to cart</button>
                    <div className="quantityChangeButton">
                        <input type="button" value="+" onClick={()=>props.increase(props.product)}/>
                        <input style={{width:'20px'}} type="text" value={props.quantity} disabled/>
                        <input type="button" value="-" onClick={()=>props.decrease(props.product)}/>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Product;