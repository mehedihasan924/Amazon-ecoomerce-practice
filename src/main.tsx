import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Home from './Component/Home/Home.jsx';
import Shop from './Component/Shop/Shop.jsx';
import Login from './Component/Login/Login.jsx';
import Register from './Component//Register/Register.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Order from './Component/Order/order.jsx';
import ProductDetail from './Component/ProductDetails/ProductDetail.jsx';
import CartProductloader from './CartProductLoader/CartProductloader.js';
import CheckOut from './Component/CheckOut/CheckOut.jsx';
import AuthProvider from './Component/Providers/AuthProvider.jsx';
import ProvetRoute from './Component/PrivetRoute/ProvetRoute.jsx';

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
        element: <ProvetRoute><Order></Order> </ProvetRoute> ,
        loader:CartProductloader
      },
      {
        path:"/login",
        element:<Login> </Login>
      } ,
      {
        path:"/signup",
        element: <Register></Register>
      } ,
      {
        path: "/checkout",
        element: <ProvetRoute> <CheckOut></CheckOut> </ProvetRoute>
      }  
    
  ] }

 ])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <AuthProvider> 
          <RouterProvider router={router}> </RouterProvider>
        
      </AuthProvider>
  </React.StrictMode>,
)
