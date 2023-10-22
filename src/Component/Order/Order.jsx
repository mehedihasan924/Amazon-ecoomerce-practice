import React from 'react';
import Cart from '../../Component/Cart/cart';
import { useLoaderData } from 'react-router-dom';
import Orderdetails from '../Orderdetails/Orderdetails';
import './Order.css'
const Order = () => {
    const cart=useLoaderData()
    console.log(cart)
    return (
    <div className="shop-container">
         
        <div className="order-container">
            <h1> Ordr page:{cart.length} </h1> <br />
            <h1> All Items </h1>  
            {
             cart.map(data=>(
                <Orderdetails
                key={cart.id}
                Items={data}
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