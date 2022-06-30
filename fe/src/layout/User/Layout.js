import React from 'react'
import Header from '../../component/User/Header'
import Footer from '../../component/User/Footer'
import Navigation from '../../component/User/Navigation'
import { Outlet } from 'react-router-dom'
export default function Layout() {
    return (
        <>
            <Header></Header>
            <Navigation></Navigation>
            <Outlet />
            <Footer></Footer>
        </>
    )
}
