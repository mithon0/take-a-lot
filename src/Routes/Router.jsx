import {  createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import AllProducts from "../Page/AllProducts/AllProducts";
import ProductDetails from "../Page/ProductDetails/ProductDetails";
import SellOn from "../Page/SellOn/SellOn";
import HelpCenter from "../Page/TopNav/HelpCenter/HelpCenter"; 
import LogIn from "../Page/TopNav/LogIn/LogIn";
import Register from "../Page/TopNav/Register/Register";
import Orders from "../Page/TopNav/Orders/Orders";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:"/all",
          element:<AllProducts />
        },
        {
          path: "/product-details/:name/:id",
          element:<ProductDetails />
        }, 
        {
          path:"/help-center",
          element:<HelpCenter/>
        },
        {
          path:"/login",
          element:<LogIn/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/orders",
          element:<Orders/>
        },
        {
          path:"/sell-on-takealot",
          element:<SellOn />
        }
      ]
    },
  ]);
  