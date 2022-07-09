import React from 'react'

import cat from '../../images/cat.svg'

import { Link } from 'gatsby'

const Hero = () => {
  return (
    <section id='hero'>
        
    <div className="text">
        <p>We are <h1><Link to="/about">ButlrStudios</Link></h1></p>
        <br />
        <p>We build web-solutions<br />developed with <span>skill</span> &#38; <span>passion</span></p>
    </div>

    <div className="buttons">
      <a className='btn' href="http://sig.xorex.net/">SigMonD</a>
      <Link className='btn btn-light' to="/contact">Contact Us</Link>
    </div>

    <img src={ cat } alt="cat" />

    </section>
  )
}

export default Hero