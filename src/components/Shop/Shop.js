import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData'
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState(fakeData);
    
    
    const [cart,setCart]=useState([]);
    const [quantity,setQuantity]=useState(0);


    //localHost
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


    const handleToCart=(product)=>{
    
        const sameProduct=cart.find(pd=>pd.key===product.key);
        
        
        if(!sameProduct){
            addToDatabaseCart(product.key,1)
        }
        product.quantity=1;
        setQuantity(product.quantity)
        const currectProducts=cart.filter(pd=>pd.key!==product.key);
        const newCart=[...currectProducts,product];
        
        setCart(newCart);
            
    }
    console.log(cart);

    const increase=(product)=>{
        const sameProduct=cart.find(pd=>pd.key===product.key);
        if(sameProduct){
            if(sameProduct.quantity<product.stock ){
                sameProduct.quantity=sameProduct.quantity+1;
                addToDatabaseCart(sameProduct.key,sameProduct.quantity)
                const currectProducts=cart.filter(pd=>pd.key!==product.key);
                const newCart=[...currectProducts,sameProduct]
                setCart(newCart)
                setQuantity(sameProduct.quantity)
            }
        }
        
    }
    const decrease=(product)=>{
        const sameProduct=cart.find(pd=>pd.key===product.key);
        if(sameProduct){
            if(sameProduct.quantity>1){
                sameProduct.quantity=sameProduct.quantity-1;
                addToDatabaseCart(sameProduct.key,sameProduct.quantity)
                const currectProducts=cart.filter(pd=>pd.key!==product.key);
                const newCart=[...currectProducts,sameProduct]
                setCart(newCart)
                setQuantity(sameProduct.quantity)
            }
        }
        
    }


    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product=><Product
                         key={product.key} 
                         product={product}
                         handleToCart={handleToCart}
                         increase={increase}
                         decrease={decrease}
                         quantity={quantity}
                         cart={cart}
                         ></Product>)
                }
            </div>
            <div className="cart-container">
            
               <Cart product={cart}>
                <br/>
                <Link to="/review"><button className="main-button"> Order Review</button></Link>
               </Cart>
            </div>
        </div>
    );
};

export default Shop;