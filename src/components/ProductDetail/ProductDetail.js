import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';

const ProductDetail = () => {
    const {key}=useParams();
    console.log(key);
    const currectProduct=fakeData.find(pd=>pd.key===key);
    const {name,img,price,stock,seller}=currectProduct;
    return (
        <div style={{margin:'30px 100px',display:'flex'}}>
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-details">
                <h4>{name}</h4>
                <p>Price : ${price}</p>
                <p><small>Quantity : {stock}</small></p>
                <p><small>By : {seller}</small></p>
            </div>
        </div>
    );
};

export default ProductDetail;