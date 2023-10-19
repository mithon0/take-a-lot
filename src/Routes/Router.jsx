import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import AllProducts from "../Page/AllProducts/AllProducts";
import ProductDetails from "../Page/ProductDetails/ProductDetails";
import SellOn from "../Page/SellOn/SellOn";
import ApplyPage from "../Page/ApplyPage/ApplyPage";
import MyAccountPage from "../Page/MyAccountPage/MyAccountPage";
import HelpCenter from "../Page/HelpCenter/HelpCenter";
import HelpCenterLayout from "../Layout/HelpCenterLayout";
import RegisterPage from "../Page/Register/RegisterPage";
import LoginPage from "../Page/Login/LoginPage";
import DeliveryHelpHome from "../Page/HelpCenter/DeliveryHelp/DeliveryHelpHome";
import ReturnHelp from "../Page/HelpCenter/ReturnHelp/ReturnHelp";
import OrderCancellationHelp from "../Page/HelpCenter/OrderCancellationHelp/OrderCancellationHelp";
import CollectionHelp from "../Page/HelpCenter/CollectionHelp/CollectionHelp";
import RefundsHelp from "../Page/HelpCenter/RefundsHelp/RefundsHelp";
import PaymentsPromosGiftVouchersHelp from "../Page/HelpCenter/PaymentsPromosGiftVouchersHelp/PaymentsPromosGiftVouchersHelp";
import ProductStockHelp from "../Page/HelpCenter/ProductStockHelp/ProductStockHelp";
import DataPrivacyHelp from "../Page/HelpCenter/DataPrivacyHelp/DataPrivacyHelp";
import Orders from "../Page/Orders/Orders";
import Wishlist from "../Page/Wishlist/Wishlist";




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
        path: "/all",
        element: <AllProducts />
      },
      {
        path: "/product-details/:name/:id",
        element: <ProductDetails />
      },
      {
        path: "/account/orders",
        element: <Orders />
      },
      {
        path: "/sell-on-takealot",
        element: <SellOn />
      },
      {
        path: "/sell/apply",
        element: <ApplyPage />
      },
      {
        path: "/my-account",
        element: <MyAccountPage />
      },
      {
        path: "/help-centre",
        element: <HelpCenterLayout />,
        children: [
          {
            path: "/help-centre",
            element: <HelpCenter />,
          },
          {
            path: "delivery",
            element: <DeliveryHelpHome />
          },
          {
            path:"returns",
            element:<ReturnHelp />
          },
          {
            path:"orders-cancellations",
            element:<OrderCancellationHelp />
          },
          {
            path:"collection",
            element:<CollectionHelp />
          },
          {
            path:"refunds",
            element:<RefundsHelp />
          },
          {
            path:"payments-promos-gift-vouchers",
            element:<PaymentsPromosGiftVouchersHelp />
          },
          {
            path:"product-stock",
            element:<ProductStockHelp />
          },
          {
            path:"data-privacy",
            element:<DataPrivacyHelp />
          }
        ]
      },
      {
        path:"/account/register",
        element:<RegisterPage />
      },
      {
        path:"/account/login",
        element:<LoginPage />
      },
      {
        path:"/wishlist",
        element:<Wishlist />
      }
    ]
  },
]);
