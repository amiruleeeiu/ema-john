import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import { Link } from 'react-router-dom';
import gif from '../../images/giphy.gif'

const Review = () => {
    
    const [cart,setCart]=useState([]);
    const [placeOrder,setPlaceOrder]=useState(false);
    
    const handleRemove=(key)=>{
        
        const currectProducts=cart.filter(pd=>pd.key!==key);
        setCart(currectProducts);

        removeFromDatabaseCart(key);
        console.log("remove");
    
    }
    console.log(cart);

    useEffect(()=>{
            const saveCart=getDatabaseCart();
            const keys=Object.keys(saveCart);
            const currectProducts=keys.map(key=>{
            const product=fakeData.find(product=>product.key===key);
            product.quantity=saveCart[key];
            return product;
        })
        setCart(currectProducts)
    },[])
    console.log(cart);
    
    const handlePlaceOrder=()=>{
        setCart([]);
        setPlaceOrder(true)
        processOrder(cart);
    }
    
    
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart ?
                    cart.map(product=><ReviewDetails
                         key={product.key} 
                         product={product}
                         handleRemove={handleRemove}
                         ></ReviewDetails>)
                    : <h3>Add Product by Shop <Link to="/">Click Here</Link></h3>
                        
                }
                {
                    placeOrder && <img src={gif} alt=""/>
                }
                 
            </div>
            <div className="cart-container">
                <Cart product={cart}>
                    <br/>
                    <button className="main-button" onClick={handlePlaceOrder}>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;