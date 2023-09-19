import React from 'react';
import './Cart.css'
const cart = (props) => {
    // const Cart=props.Cart  //Option 1
    const {Cart}=props       //Option 2

// card item total prie
   let totalprice=0;
   let  totalshipping=0;
   let quantity=0;
   for( const Product of Cart ){
    // Product.quantity=Product.quantity|| 1;

     totalprice= totalprice + Product.price* Product.quantity;
     totalshipping=totalshipping + Product.shipping
    quantity= quantity + Product.quantity


   }

   const tax=totalprice*5/100
   const GrandTotal= totalprice+totalshipping+tax
   console.log(Cart)
   //card  Div
    return (
        <div className='cart'>
              <h1>Order summary:</h1>
              <p> select items:{quantity} </p>
              <p> Total price:{totalprice} </p>
              <p> total Shopping:{totalshipping} </p>
              <p> tax: {tax} </p>
              <h4> Grand total: {GrandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default cart;