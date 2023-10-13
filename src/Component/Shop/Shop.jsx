// import React, { useEffect, useState } from 'react';
// import './Shop.css'
// import Product from '../Products/Product';
// import Cart from '../Cart/Cart';
// import { addToDb, getStoredCart } from '../../Utility/Facebd';
// const Shop = () => {
//     const [products, setProducts]=useState([])
//     const [cart ,setCart]=useState([])


//   useEffect( ()=>{
//         fetch('/public/Product.json')
//         .then(res=>res.json())
//         .then( data => setProducts(data))
//     },[]);

//         // useEffect( ()=>{
//         //     // console.log(products)
//         //     const storedcart= getShoppingCart
//         //   //  step 1 :Get id
//         //     for( const id in storedcart){
//         //     //  step 2: get the product by using id 
//         //         const addedProduct=products.find(product => product.id===id)
//         //         console.log(addedProduct)
//         //     // step 3: get quantity of theproduct
//         //     const quantity=storedcart[id];
//         //     addedProduct.quantity=quantity
//         //     console.log(addedProduct)
//         //     }
//         // }, [products])
 
//       //Product added cart and quantity set  
//         useEffect(()=>{
//             const storedCart= getStoredCart();
//             const savedCart=[];
//             //step1:
//             for(const id in storedCart){
//                 // step 2: get Product
//                 const addedProduct=products.find(product =>product.id===id)                
//                 //step 3
//                 if(addedProduct){
//                     const quantity=storedCart[id]
//                     addedProduct.quantity=quantity;
//                    // step 4 
//                    savedCart.push(addedProduct)
//                 }
//                 console.log('added Product', addedProduct)
//             }
//             setCart(savedCart);
//         }, [products])
        



//         // Function ke props akare patano hoyase
//             const handleAdToCArt=(product)=>{
//                 let newCart=[]
//             // const newcart =[...cart, product];
//                 const exists =cart.find(pd=> pd.id === product.id);
//                 if(!exists){
//                     product.quantity=1;
//                     newCart=[...cart,product ]
//                     setCart(newCart)
//                 }
//                 else{
//                     exists.quantity=exists.quantity+1;
//                     const remaining= cart.filter(pd=>pd.id!==product.id)
//                     newCart=[...remaining,exists]
//                 }

//          setCart(newCart)
//         //local storege a add korar jonno
//             addToDb(product.id)
//     }
//     return (
//         <div className='shop-container'>   
//                   {/* // Product loops */}
//             <div className="product-container">           
//                {
//                 products.map( product => 
//                 <Product 
//                 key={product.id} 
//                 product={product}
//                 handleAdToCArt={handleAdToCArt}
//                 ></Product>
//                 )
//                }
//             </div>
            
//             {/* Cart Div */}
//             <div className="cart-container">
//              <Cart Cart={cart} > </Cart>
//             </div>          
//         </div>
//     );
// };

// export default Shop;


import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../Utility/Facebd';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('/public/Product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect( () =>{
        const storedCart = getStoredCart();
        const savedCart = [];
        // step 1: get id of the addedProduct
        for(const id in storedCart){
            // step 2: get product from products state by using id
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                // step 3: add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4: add the added product to the saved cart
                savedCart.push(addedProduct);
            }
            // console.log('added Product', addedProduct)
        }
        // step 5: set the cart
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (product) => {
        // cart.push(product); '
        let newCart = [];
        // const newCart = [...cart, product];
        // if product doesn't exist in the cart, then set quantity = 1
        // if exist update quantity by 1
        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart= [...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product.id)
    }

    return (
        <div className='shop-container '>
            <div className="products-container ">
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleAdToCArt={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;