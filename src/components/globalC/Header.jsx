import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <header>
        <button>Menu</button>
        <Link to="/"><h1>Header</h1></Link>
        <p>Contact Us</p>
    </header>
  )
}

export default Header