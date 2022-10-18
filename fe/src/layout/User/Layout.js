import React, { useState, Suspense } from "react";
import { Outlet } from "react-router-dom";
import SuspenseLoading from "../../component/SuspenseLoading";
import Header from "../../component/User/Header";
import Footer from "../../component/User/Footer";
import Navigation from "../../component/User/Navigation";

export default function Layout() {
  return (
    <>
      <Header></Header>
      <Navigation></Navigation>
      <Suspense fallback={<SuspenseLoading />}>
        <Outlet />
      </Suspense>
      <Footer></Footer>
    </>
  );
}
