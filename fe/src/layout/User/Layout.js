import React, { useState, Suspense } from "react";
import { Outlet } from "react-router-dom";
import SuspenseLoading from "../../component/SuspenseLoading";
import Header from "../../component/User/Header";
import Footer from "../../component/User/Footer";
import Navigation from "../../component/User/Navigation";
import CircularProgress from "@mui/material/CircularProgress";

export default function Layout() {
  return (
    <>
      <Header></Header>
      <Navigation></Navigation>
      <div
        style={{
          minHeight: "calc(100vh - 564px)",
        }}
      >
        <Suspense fallback={<SuspenseLoading />}>
          <Outlet />
        </Suspense>
      </div>

      <Footer></Footer>
    </>
  );
}
