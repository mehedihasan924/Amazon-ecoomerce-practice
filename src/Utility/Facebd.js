// // Card Item add system @@@

// const addToDb= id =>{

//     let shopingCart=getShoppingCart();  
// //Get the sopping cart from local stores
//   const storedCart =localStorage.getItem('shopping-Cart')
//         if(storedCart){
//           shopingCart=JSON.parse(storedCart)
//         }
//        else{
//           shopingCart={};
//        }

//     // add Cart Quantity @@@
//    const quantity= shopingCart[id];
//    if(!quantity){
//      shopingCart[id]=1;
//    }
//    else{
//      const newQuantity= quantity +1;
//      shopingCart[id]=newQuantity;
//     //  console.log('new items')
//     //  localStorage.setItem(id,1);
//    }
//    localStorage.setItem('shopping-Cart', JSON.stringify(shopingCart) );
// } 
// const removeFromDb = (id)=>{

//     const shoppingCart=getShoppingCart();   
       
//      if(id in shoppingCart){
//       delete shoppingCart[id];
//       localStorage.setItem('shopping-Cart', JSON.stringify(shoppingCart));
//     }
// }


// const getShoppingCart =()=>{
//     let shoppingCart ={};
    
//       const storedCart=localStorage.getItem('shopping-cart');
//       if(storedCart){
//         shoppingCart=JSON.parse(storedCart)
//       }
//       return shoppingCart
// }




// // Na dileo kaj korbe@@
// const deleteShoppingCart=()=>{
//    localStorage.removeItem('shopping-cart')
// }
 

// export {addToDb ,removeFromDb , getShoppingCart , deleteShoppingCart}




//  use local storage to manage cart data
const addToDb = id =>{
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const getStoredCart = () =>{
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const removeFromDb = id =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb, 
    getStoredCart,
    removeFromDb,
    deleteShoppingCart,
 
}