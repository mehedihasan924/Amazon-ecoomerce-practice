import { getStoredCart } from "../Utility/Facebd";

const CartProductloader = async () => {

  const loadedProducts = await fetch('Product.json');
  const Products = await loadedProducts.json()

// if cart data is in database,you have to use async await
const storedCart=getStoredCart();
const savedCart=[];
  console.log( storedCart)
  for(const id in storedCart){
      const addedProduct= Products.fine(pd=>pd.id===id);
      if(addedProduct){
        const quantity=storedCart[id];
        addedProduct.quantity=quantity;
        savedCart.push(addedProduct)
      }
  }

  return savedCart
}
export default CartProductloader
