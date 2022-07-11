import React from 'react'
import { Link } from 'gatsby'
import { useState, useCallback, useEffect } from 'react';
import Loader from './Loader';



const Header = ({ isMenuKeyPressed }) => {

  const [openMenu, setOpenMenu] = useState('');
  const [closeMenu, setCloseMenu] = useState('');

  const [loaded, setLoaded] = useState(false);
  const [blink, setBlink] = useState('');
  let alreadyClickedMenuButton = false;

  const a = 'open';
  const b = 'close';
  const c = '';

  const handleMenuButtonBlink = () => {
    if(!loaded) {
      setLoaded(true);
      console.log('Loaded!');
      timer();
    }
  }

  const timer = () => {
    let sec = 0;
    let timer = setInterval(() => {
        sec++;
        // console.log(sec);
        if (sec == 10) {
            // console.log('Start Blinking!');
            setBlink('blink');
        }
    }, 1000);
  }

  if(isMenuKeyPressed) {
    handleKeyDown();
  }

  const handleKeyDown = () => {}

  const handleMenuOpen = e => {
    setBlink('');

    if(openMenu == ''){
      setOpenMenu(a);
    }
  }

  const handleMenuClose = () => {
    setBlink('');

    if(closeMenu == ''){
      setCloseMenu(b);

      setTimeout(() => {
        setOpenMenu(c);
        setCloseMenu(c);
      }, 2000);
    }
  }

    // handle what happens on key press
    const handleKeyPress = useCallback((event) => {
      console.log(`Key pressed: ${event.key}`);

      if(event.key == 'm') {
        handleMenuOpen();
      }

      if(event.key == 'x') {
        handleMenuClose();
      }
    }, []);
  
    useEffect(() => {
      // attach the event listener
      document.addEventListener('keydown', handleKeyPress);
  
      // remove the event listener
      return () => {
        document.removeEventListener('keydown', handleKeyPress);
      };
    }, [handleKeyPress]);

  return (
    <>
    <div className={ `menu-container ${openMenu} ${closeMenu}` }>
          <div className="menu-close">
            <div className="menu-close-img"><button onClick={ handleMenuClose } className={ `menu-close-img close-btn ${openMenu}` } src="close-icon.png" alt="close">Close</button></div>
          </div>
          <div className="hr"></div>
          <div className="menu">
            <div className={ `menu-left ${openMenu}` }>
            
              <Link className='menu-link' to='/'>Home</Link>
              <Link className='menu-link' to='/case-studies'>Case Studies</Link>
              <Link className='menu-link' to='/about'>About Us</Link>
            
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

    <header>
        <button className={ blink } onClick={handleMenuOpen}>Menu</button>
        <Link to="/"><h1>ButlrStudios</h1></Link>
        <Link className='header-contact-link' to='#contact-section'>Contact Us</Link>
    </header>
    <Loader onLoad={ handleMenuButtonBlink() } />
    </>
  )
}

export default Header