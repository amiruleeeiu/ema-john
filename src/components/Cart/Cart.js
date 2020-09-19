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
            <h3>Cart Calculation</h3>
            <p>Total : ${numberFormat(total)}</p>
            <p>Shipping : ${numberFormat(shipping)}</p>
            <p>Tax+vat : ${numberFormat(tax)}</p>
            <p>Grand Total : ${numberFormat(total+shipping+tax)}</p>
            {props.children}
        </div>
    );
};

export default Cart;