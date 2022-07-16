import React, { useState } from "react";

import Header from "../../component/User/Header";
import Footer from "../../component/User/Footer";
import Navigation from "../../component/User/Navigation";
import { Outlet } from "react-router-dom";
import Slideshow from "../../component/User/Slideshow";
import Service from "../../component/User/Service";
import ProductContainer from "./ProductContainer";
import Authentication from "./Authentication";
export default function Layout() {
  const [modal, setModal] = useState(false)
  const openModal = (value) => {
    setModal(value)
  }
  return (
    <>
      {
        !modal
          ? <>
            <Header modal={openModal} ></Header>
            <Navigation></Navigation>
            <Slideshow></Slideshow>
            <Service></Service>
            <ProductContainer category="TENNIS"></ProductContainer>
            <Outlet />
            <Footer></Footer>
          </>
          :
          <>
            <Authentication></Authentication>
            <Header modal={openModal} isOpen={modal} ></Header>
            <Navigation></Navigation>
            <Slideshow></Slideshow>
            <Service></Service>
            <ProductContainer category="TENNIS"></ProductContainer>
            <Outlet />
            <Footer></Footer>
          </>
      }
    </>

  );
}
