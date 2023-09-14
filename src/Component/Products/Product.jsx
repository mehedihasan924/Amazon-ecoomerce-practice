import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const {img, rating, id, price, name,category}=props.product;

    //Function ke shop page teke props patanu houyase
      const handleAdToCArt=props.handleAdToCArt;

       //Product Div 
    return (
        <div className='product' > 
            <img src={img} alt="" />
            <div className='product-info' >
                    <h2 key={id}>{name}</h2>                
                    <p> Price: {price}</p>
                    <p> Rating :{rating}</p>
                    <p> category: {category}</p>                                                      
            </div>
            <button onClick={()=>handleAdToCArt(props.product)} className='btn-cart '> Add to cart 
           <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;