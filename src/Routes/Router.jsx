import {  createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import AllProducts from "../Page/AllProducts/AllProducts";
import HelpCenter from "../Page/TopNav/HelpCenter/HelpCenter";



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
          path:"/help-center",
          element:<HelpCenter/>
        },
      ]
    },
  ]);
  