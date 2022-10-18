import { lazy } from "react";
import Layout from "../layout/User/Layout";
import Login from "../component/User/Login";
import Register from "../component/User/Register";
const HomePage = lazy(() => import("../pages/User/HomePage"));
const ProductDetails = lazy(() => import("../pages/User/ProductDetails"));

const Cart = lazy(() => import("../pages/User/Cart"));

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
    ],
  },
];

export { routes };
