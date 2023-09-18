import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Products/Product';
import Cart from '../Cart/cart';
import { addToDb, getShoppingCart } from '../../Utility/Facebd';
const Shop = () => {
    const [products, setProducts]=useState([])
    const [cart ,setCart]=useState([])


  useEffect( ()=>{
        fetch('/public/Product.json')
        .then(res=>res.json())
        .then( data => setProducts(data))
    },[]);

        // useEffect( ()=>{
        //     // console.log(products)
        //     const storedcart= getShoppingCart
        //   //  step 1 :Get id
        //     for( const id in storedcart){
        //     //  step 2: get the product by using id 
        //         const addedProduct=products.find(product => product.id===id)
        //         console.log(addedProduct)
        //     // step 3: get quantity of theproduct
        //     const quantity=storedcart[id];
        //     addedProduct.quantity=quantity
        //     console.log(addedProduct)
        //     }
        // }, [products])
 
        useEffect(()=>{
            const storedCart=getShoppingCart
            const saveCart=[]
            //step1:
            for(const id in storedCart){
                // step 2: get Product
                const addedProduct=products.find(product =>product.id===id)
                console.log(addedProduct)
                //step 3
                if(addedProduct){
                    const quantity=storedCart[id]
                    addedProduct.quantity=quantity;
                   // step 4 
                   saveCart.push(addedProduct)
                }
            }
            setCart(saveCart);
        }, [products])
        

        // Function ke props akare patano hoyase
            const handleAdToCArt=(product )=>{
            const newcart =[...cart, product];
            setCart(newcart)
        //local storege a add korar jonno
            addToDb(product.id)
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