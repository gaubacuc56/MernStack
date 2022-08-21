import React from 'react'
import Slideshow from "../../component/User/Slideshow";
import Service from "../../component/User/Service";
import ProductContainer from '../../layout/User/ProductContainer';
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
    )
}
