import React from "react";
import Header from "../../component/User/Header";
import Footer from "../../component/User/Footer";
import Navigation from "../../component/User/Navigation";
import { Outlet } from "react-router-dom";
import Slideshow from "../../component/User/Slideshow";
import Service from "../../component/User/Service";
import ProductContainer from "./ProductContainer";
export default function Layout() {
  return (
    <>
      <Header></Header>
      <Navigation></Navigation>
      <Slideshow></Slideshow>
      <Service></Service>
      <ProductContainer category="TENNIS"></ProductContainer>
      <Outlet />
      <Footer></Footer>
    </>
  );
}
