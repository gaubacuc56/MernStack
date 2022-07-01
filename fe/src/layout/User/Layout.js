import React from "react";
import Header from "../../component/User/Header";
import Footer from "../../component/User/Footer";
import Navigation from "../../component/User/Navigation";
import { Outlet } from "react-router-dom";
import Slideshow from "../../component/User/Slideshow";
import Service from "../../component/User/Service";
import ProductCard from "../../component/User/ProductCard";
export default function Layout() {
  return (
    <>
      <Header></Header>
      <Navigation></Navigation>
      <Slideshow></Slideshow>
      <Service></Service>
      <ProductCard
        product_name="Nike Air Max"
        product_price="4"
        product_type="soccer"
        imageURL="https://res.cloudinary.com/dd0x1hbtf/image/upload/v1656600836/soccer/02b206b6-d3b4-41b4-8840-41cecd12b959_pm9ojf.webp"
      ></ProductCard>
      <Outlet />
      <Footer></Footer>
    </>
  );
}
