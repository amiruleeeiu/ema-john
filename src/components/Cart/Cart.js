import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const product=props.product;
    let total=0;
    if(product){
        for(let i=0;i<product.length;i++){
            total=total+product[i].price*product[i].quantity;
        }
    }
    console.log(total);

    let shipping=0;

    if(total<500 && total>300){
        shipping=12.52;
    }
    else if(total<300 && total>0){
        shipping=6.45;
    }
    else{
        shipping=0;
    }

    const tax=total/20;

    const numberFormat=(num)=>{
        const fractionFixed=num.toFixed(2);
        return Number(fractionFixed);
    }

    return (
        <div className="cart">
            <h2>Cart Calculation</h2>
            <br/>
            <h2 style={{fontWeight:'400'}}>Cart Products: {product.length}</h2>
            <h3>Total : ${numberFormat(total)}</h3>
            <h3>Shipping : ${numberFormat(shipping)}</h3>
            <h3>Tax+vat : ${numberFormat(tax)}</h3>
            <h3>Grand Total : ${numberFormat(total+shipping+tax)}</h3>
            {props.children}
        </div>
    );
};

export default Cart;