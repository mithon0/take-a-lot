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
import Cart from "../Page/Cart/Cart";
import Account from "../Page/Account/Account";
import Returns from "../Page/Returns/Returns";
import CreditRefunds from "../Page/CreditRefunds/CreditRefunds";
import ProductReview from "../Page/ProductReview/ProductReview";
import Invoices from "../Page/Invoices/Invoices";
import PersonalInfo from "../Page/PersonalInfo/PersonalInfo";
import ApplyVoucher from "../Page/ApplyVoucher/ApplyVoucher";
import AddressBook from "../Page/AddressBook/AddressBook";
import Newsletter from "../Page/Newsletter/Newsletter";
import ReviewsHistory from "../Page/ReviewsHistory/ReviewsHistory";




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
      },
      {
        path:"/cart",
        element: <Cart />
      },
      {
        path:"/account",
        element:<Account />,
        children:[
          {
            path: "orders",
            element: <Orders />
          },
          {
            path:"returns",
            element:<Returns />
          },
          {
            path:"credits",
            element:<CreditRefunds />
          },
          {
            path:"reviews",
            element:<ProductReview />
          },
          {
            path:"invoices",
            element:<Invoices />
          },
          {
            path:"personal-details",
            element:<PersonalInfo />
          },
          {
            path:"voucher",
            element:<ApplyVoucher />
          },
          {
            path:"address-book",
            element:<AddressBook />
          },
          {
            path:"newsletter",
            element:<Newsletter />
          },
          {
            path: "reviewshistory",
            element: <ReviewsHistory/>
          }
        ]
      }
    ]
  },
]);
