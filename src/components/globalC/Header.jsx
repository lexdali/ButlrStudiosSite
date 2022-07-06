import React from 'react'
import { Link } from 'gatsby'
import { useState } from 'react';



const Header = () => {

  const [closeMenuStyle, setCloseMenuStyle] = useState('');
  const [closeMenu, setCloseMenu] = useState('');

  

  const handleMenuClose = e => {
    setCloseMenuStyle(closeMenuStyle + ' closing');

    handleMenuRemoval();
  }

  const handleMenuRemoval = () => {
    setTimeout(() => {
      setCloseMenu(closeMenu + ' closing');
    }, 3000);
  }

  return (
    <header>

        <div className={ "menu-container" + closeMenu }>
          <div className="menu-close">
            <div className="menu-close-img"><button onClick={handleMenuClose} className={ 'menu-close-img close-btn' + closeMenuStyle } src="close-icon.png" alt="close">Close</button></div>
          </div>
          <div className="hr"></div>
          <div className="menu">
            <div className={"menu-left" + closeMenuStyle}>
              <div className="menu-links">
                <div className="menu-link"><Link to='#'>Home <span>01</span></Link></div>
                <div className="menu-link"><Link to='#'>Case Studies <span>02</span></Link></div>
                <div className="menu-link"><Link to='#'>About Us <span>03</span></Link></div>
              </div>
            </div>
            <div className={"menu-right" + closeMenuStyle}>
              <div className="contact">
                <div className="mail">
                  <div><span className="title">Contact</span><br /><br /></div>
                  <div><span className="info">contact@butlrstudios.com</span><br /></div>
                </div>
                <div className="socials">
                  <div><span className="title">Follow Us</span><br /><br /></div>

                  <div><span className="info">Instagram</span></div>
                  <div><span className="info">Twitter</span></div>
                  <div><span className="info">LinkedIn</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button>Menu</button>
        <Link to="/"><h1>Header</h1></Link>
        <p>Contact Us</p>
    </header>
  )
}

export default Header