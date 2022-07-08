import React from 'react'
import { Link } from 'gatsby'
import { useState } from 'react';



const Header = () => {

  const [openMenu, setOpenMenu] = useState('');
  const [closeMenu, setCloseMenu] = useState('');

  const a = 'open';
  const b = 'close';
  const c = '';

  const handleMenuOpen = () => {
    if(openMenu == ''){
      setOpenMenu(a);
    }
  }

  const handleMenuClose = () => {
    if(closeMenu == ''){
      setCloseMenu(b);

      setTimeout(() => {
        setOpenMenu(c);
        setCloseMenu(c);
      }, 2000);
    }
  }


  return (
    <header>

        <div className={ `menu-container ${openMenu} ${closeMenu}` }>
          <div className="menu-close">
            <div className="menu-close-img"><button onClick={ handleMenuClose } className={ `menu-close-img close-btn ${openMenu}` } src="close-icon.png" alt="close">Close</button></div>
          </div>
          <div className="hr"></div>
          <div className="menu">
            <div className={ `menu-left ${openMenu}` }>
            
              <Link className='menu-link' to='/'>Home</Link>
              <Link className='menu-link' to='/'>Case Studies</Link>
              <Link className='menu-link' to='/'>About Us</Link>
            
            </div>
            <div className={ `menu-right ${openMenu}` }>
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

        <button onClick={handleMenuOpen}>Menu</button>
        <Link to="/"><h1>Header</h1></Link>
        <Link className='header-contact-link' to='#contact-section'>Contact Us</Link>
    </header>
  )
}

export default Header