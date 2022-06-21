import React from 'react'

import { Link } from 'gatsby'

const Hero = () => {
  return (
    <section id='hero'>
        
    <div className="text">
        <p>We are <h1><Link to="/about">ButlrStudios</Link></h1></p>
        <br />
        <p>We build web-solutions<br />developed with <span>skill</span> &#38; <span>passion</span></p>
    </div>
    </section>
  )
}

export default Hero