import React from "react";
import Header from "../../component/User/Header";
import Footer from "../../component/User/Footer";
import Navigation from "../../component/User/Navigation";
import { Outlet } from "react-router-dom";
import Slideshow from "../../component/User/Slideshow";
import Service from "../../component/User/Service";
export default function Layout() {
  return (
    <>
      <Header></Header>
      <Navigation></Navigation>
      <Slideshow></Slideshow>
      <Service></Service>
      <Outlet />
      <Footer></Footer>
    </>
  );
}
