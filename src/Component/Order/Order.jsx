import React, { useState } from 'react';
import Cart from '../../Component/Cart/cart';
import { useLoaderData } from 'react-router-dom';
import Orderdetails from '../Orderdetails/Orderdetails';
import {  removeFromDb  } from '../../utilities/fakedb';
import './Order.css'
const Order = () => {
    const cartData=useLoaderData();
    // new start newya hoise...remove korar jonno (+,-)
    const [cart , setCart]=useState(cartData);

    const handleRemoveFromCart=(id)=>{
      const remaining=cart.filter(product=> product.id !==id);
        setCart(remaining);
        removeFromDb(id);
    }


   
    return (
    <div className="shop-container">
         
        <div className="order-container">
            <h1> Ordr page:{cart.length} </h1> <br />
            <h1> All Items </h1>  
            {
             cart.map(data=>(
                <Orderdetails
                key={data.id}
                Items={data}
                handleRemoveFromCart={handleRemoveFromCart}
                > </Orderdetails>
               )) 
            }

        </div>
        <div className="cart-container">
          <Cart cart={cart}> </Cart>
        </div>
    </div>

    );
};

export default Order;