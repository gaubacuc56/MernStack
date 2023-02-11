import React from "react";
import Slideshow from "./component/Slideshow";
import Service from "./component/Service";
import ProductContainer from "./component/ProductContainer";
export default function HomePage() {
  return (
    <>
      <Slideshow></Slideshow>
      <Service></Service>
      <ProductContainer category="TENNIS"></ProductContainer>
      <ProductContainer category="SOCCER"></ProductContainer>
      <ProductContainer category="BASKETBALL"></ProductContainer>
      <ProductContainer category="RUNNING"></ProductContainer>
      {/* <ProductContainer category="LIFESTYLE"></ProductContainer> */}
    </>
  );
}
