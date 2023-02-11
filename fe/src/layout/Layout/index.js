import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import SuspenseLoading from "../../component/SuspenseLoading";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Navigation from "./component/Navigation";

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
