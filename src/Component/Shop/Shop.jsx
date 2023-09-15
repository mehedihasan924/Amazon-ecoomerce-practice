import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Products/Product';
import Cart from '../Cart/cart';
const Shop = () => {
    const [products, setProducts]=useState([]);
  useEffect( ()=>{
        fetch('/public/Product.json')
        .then(res=>res.json())
        .then( data => setProducts(data))
    },[]);

      const [cart ,setcart]=useState([])
 // Function ke props akare patano hoyase
    const handleAdToCArt=(product )=>{
       const newcart =[...cart, product];
       setcart(newcart)
    }
    return (
        <div className='shop-container'>   
                  {/* // Product loops */}
            <div className="product-container">           
               {
                products.map( product => 
                <Product 
                key={product.id} 
                product={product}
                handleAdToCArt={handleAdToCArt}
                ></Product>
                )
               }
            </div>
            
            {/* Cart Div */}
            <div className="cart-container">
             <Cart Cart={cart} > </Cart>
            </div>          
        </div>
    );
};

export default Shop;