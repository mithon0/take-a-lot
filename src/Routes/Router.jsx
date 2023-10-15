import {  createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import AllProducts from "../Page/AllProducts/AllProducts";
import ProductDetails from "../Page/ProductDetails/ProductDetails";
import SellOn from "../Page/SellOn/SellOn";
import ApplyPage from "../Page/ApplyPage/ApplyPage";
import MyAccountPage from "../Page/MyAccountPage/MyAccountPage";
import HelpCenter from "../Page/HelpCenter/HelpCenter";
import Orders from "../Page/Orders/Orders";




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
          path:"/orders",
          element:<Orders/>
        },
        {
          path:"/sell-on-takealot",
          element:<SellOn />
        },
        {
          path: "/sell/apply",
          element: <ApplyPage />
        },
        {
          path: "/my-account",
          element:<MyAccountPage />
        },
        {
          path: "/help-center",
          element:<HelpCenter />
        }
      ]
    },
  ]);
  