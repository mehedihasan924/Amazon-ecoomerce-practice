import React from 'react';
import './Cart.css'
const cart = (props) => {
    // const Cart=props.Cart  //Option 1
    const {Cart}=props       //Option 2

// card item total prie
   let totalprice=0;
   let  totalshipping=0;
   for( const Product of Cart ){
     totalprice= totalprice + Product.price;
     totalshipping=totalshipping + Product.shipping
   }

   const tax=totalprice*5/100
   const GrandTotal= totalprice+totalshipping+tax

   //card  Div
    return (
        <div className='cart'>
              <h1>Order summary:</h1>
              <p> select items:{Cart.length} </p>
              <p> Total price:{totalprice} </p>
              <p> total Shopping:{totalshipping} </p>
              <p> tax: {tax} </p>
              <h4> Grand total: {GrandTotal}</h4>
        </div>
    );
};

export default cart;