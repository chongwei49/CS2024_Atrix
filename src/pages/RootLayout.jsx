import React from 'react'
import NavbarHeader from '../components/NavbarHeader'
import FooterSection from '../components/FooterSection'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    <NavbarHeader/>
    <Outlet/>
    <FooterSection/>
    </>
  )
}

export default RootLayout