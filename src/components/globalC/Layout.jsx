import React from 'react'

import "./styles/layout.css" //Import Style

// Co mponents
import Head from './Head'
import Header from './Header'
import Footer from './Footer'


const Layout = ({ children, siteTitle, isMenuKeyPressed }) => {

  return (
    <>
    {/* Head */}
    <Head title={ siteTitle } />

    {/* Body */}
    <Header isMenuKeyPressed={ isMenuKeyPressed } />
      { children }
    <Footer />
    </>
  )
}

export default Layout