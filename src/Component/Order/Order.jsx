import React from 'react';
import Cart from '../../Component/Cart/cart';
import { useLoaderData } from 'react-router-dom';
import Orderdetails from '../Orderdetails/Orderdetails';
import './Order.css'
const Order = () => {
    const Cart=useLoaderData()
    console.log(Cart)
    return (
    <div className="shop-container">
         
        <div className="order-container">
            <h1> Ordr page: {Cart.length}</h1> <br />
            <h1> All Items </h1>  
            {
              Cart.map(data=>(
                <Orderdetails
                key={Cart.id}
                Items={data}
                > </Orderdetails>
               )) 
            }

        </div>
        {/* <div className="cart-container">
            <Cart Cart={Cart}> </Cart>
        </div> */}
    </div>

    );
};

export default Order;