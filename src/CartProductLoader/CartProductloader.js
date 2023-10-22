// import { getStoredCart } from "../utilities/fakedb";

const CartProductsLoader = async () => {
    const loadedProducts = await fetch('/public/product.json');
    const products = await loadedProducts.json();
 
  
    // if cart data is in database, you have to use async await
// const storedCart = getStoredCart();
    //  console.log(storedCart)
    const savedCart = [];

    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }   


return savedCart

    // return savedCart;
}

export default CartProductsLoader;
