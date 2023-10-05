import {  createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import AllProducts from "../Page/AllProducts/AllProducts";



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
        }
      ]
    },
  ]);
  