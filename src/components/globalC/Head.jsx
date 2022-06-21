import React from 'react'

import { Helmet } from 'react-helmet'


const Head = ({ title }) => {
  return (
    <Helmet
        defaultTitle="Virtuous | ButlrStudios"
        title={title}
        titleTemplate="%s | ButlrStudios"
        >
            <meta name="description" content="ButlrStudios provides quality services in web development and branding for businesses." />
            <meta name="keywords" content="web development, website design, branding, logo design" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="author" content="Alexander Dalipagic and Fares AlHusseini" />

            <meta property="og:title" content={`${title} | ButlrStudios`} />
            <meta property="og:description" content="ButlrStudios is here to make your life much, much easier." />
            <meta property="og:image" content="../images/tbp.png" />
    </Helmet>
    
  )
}

export default Head