import React, { useState, Suspense } from "react";
import { Outlet } from "react-router-dom";
import SuspenseLoading from "../../component/SuspenseLoading";
import Header from "../../component/User/Header";
import Footer from "../../component/User/Footer";
import Authentication from "./Authentication";
import Navigation from "../../component/User/Navigation";

export default function Layout() {
  const [modal, setModal] = useState(false);
  const openModal = (value) => {
    setModal(value);
  };
  return (
    <>
      {!modal ? (
        <>
          <Header modal={openModal}></Header>
          <Navigation></Navigation>
          <Suspense fallback={<SuspenseLoading />}>
            <Outlet />
          </Suspense>
          <Footer></Footer>
        </>
      ) : (
        <>
          <Authentication modal={openModal} isOpen={modal}></Authentication>
          <Header modal={openModal} isOpen={modal}></Header>
          <Navigation></Navigation>
          <Suspense fallback={<SuspenseLoading />}>
            <Outlet />
          </Suspense>
          <Footer></Footer>
        </>
      )}
    </>
  );
}
