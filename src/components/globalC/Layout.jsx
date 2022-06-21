import React from 'react'

import "./styles/layout.css" //Import Style

// Components
import Head from './Head'
import Header from './Header'
import Footer from './Footer'


const Layout = ({ children, siteTitle }) => {
  return (
    <>
    {/* Head */}
    <Head title={ siteTitle } />

    {/* Body */}
    <Header />
      { children }
    <Footer />
    </>
  )
}

export default Layout