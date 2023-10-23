import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Component/Home/Home.jsx'
import Shop from './Component/Shop/Shop.jsx'
import Login from './Component/Login/Login.jsx'
import Contact from './Component/Contact/Contact.jsx'
import Order from './Component/Order/order.jsx';
import ProductDetail from './Component/ProductDetails/ProductDetail.jsx';
import CartProductloader from './CartProductLoader/CartProductloader.js'
import { 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

 const router=createBrowserRouter([
  {
    path:"/",
    element: <Home> </Home>,
    children:[
      {
        path:"/",
        element:<Shop> </Shop>
      },
      {
        // path:"product/:id",
        // element:<ProductDetail> </ProductDetail>,
        // loader:({params})=> fetch(`/public/Product.json/${params.id}}`)

        path:"product/:id",
        loader:async({params})=>{
        console.log(params.id);
        return fetch(`public/Product.json/${params.id}`)
        },
        element:<ProductDetail> </ProductDetail>,
      },
      {
        path:"/contact",
        element:<Contact> </Contact>
      },
      {
        path:"/order", 
        element:<Order></Order>,
        loader:CartProductloader
      },
      {
        path:"/login",
        element:<Login> </Login>
      }      
  ] }

 ])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider  router={router}> </RouterProvider>
  </React.StrictMode>,
)
