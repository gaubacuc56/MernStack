import { lazy } from "react";
import Layout from "../layout/Layout";
import Login from "../component/Login";
import Register from "../component/Register";

const HomePage = lazy(() => import("../pages/HomePage"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Cart = lazy(() => import("../pages/Cart"));
const UserInformation = lazy(() => import("../pages/UserInformation"));

const routes = [
  {
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "product-details/:productId",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "profile",
        element: <UserInformation></UserInformation>,
      },
    ],
  },
];

export { routes };
