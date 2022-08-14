import React, { useState, Suspense } from "react";
import { Outlet } from "react-router-dom";
import SuspenseLoading from "../../component/SuspenseLoading";
import Header from "../../component/User/Header";
import Footer from "../../component/User/Footer";
import Authentication from "./Authentication";

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
          <Suspense fallback={<SuspenseLoading />}>
            <Outlet />
          </Suspense>
          <Footer></Footer>
        </>
      ) : (
        <>
          <Authentication modal={openModal} isOpen={modal}></Authentication>
          <Header modal={openModal} isOpen={modal}></Header>
          <Suspense fallback={<SuspenseLoading />}>
            <Outlet />
          </Suspense>
          <Footer></Footer>
        </>
      )}
    </>
  );
}
