import {  createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import AllProducts from "../Page/AllProducts/AllProducts";
import ProductDetails from "../Page/ProductDetails/ProductDetails";
import SellOn from "../Page/SellOn/SellOn";



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
          path:"/sell-on-takealot",
          element:<SellOn />
        }
      ]
    },
  ]);
  