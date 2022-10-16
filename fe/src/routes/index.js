import { lazy } from "react";
import Layout from "../layout/User/Layout";
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
    ],
  },
];

export { routes };
