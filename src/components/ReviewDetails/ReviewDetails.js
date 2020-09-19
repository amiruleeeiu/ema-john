import React from 'react';
import { MdRemoveCircle } from "react-icons/md";
import { removeFromDatabaseCart } from '../../utilities/databaseManager';
import './ReviewDetails.css'
const ReviewDetails = (props) => {
    const {name,img,quantity,price,key}=props.product;


    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-details">
                <h4>{name}</h4>
                <p>Price : ${price}</p>
                <p>Quantity: {quantity}</p>
                <br/>
                <button className="main-button" onClick={()=>props.handleRemove(key)}><MdRemoveCircle/>  Remove</button>
                
            </div>
        </div>
    );
};

export default ReviewDetails;