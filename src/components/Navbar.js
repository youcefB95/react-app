import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { NavDropdown, Form, FormControl } from 'react-bootstrap';
import './Navbar.css';
import chargeSample from '../assets/cv.pdf';







function Navbar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='logo-container'>
            {/* <Link to='/' className='navbar-logo' onClick={closeMobileMenu} >
              <img className='logo' src={process.env.PUBLIC_URL + '/images/logo.png'} ></img>
            </Link> */}
            <div className='navbar-logo'>

              <a href='/' ><img className='logo' src={process.env.PUBLIC_URL + '/images/logo.png'} ></img></a>
            </div>
            <div className="name">
              <h5>Y B</h5>
            </div>
          </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about-me'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                ABOUT ME
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link
                to='/portfolio'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                PORTFOLIO
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                ARTICLES
              </Link>
            </li>
            */}

            <li className='nav-item'>
              <Button
                route='/resume'
                link_classname='nav-links'
                target='_blank'
                className='btn'   /* 'btn' */
                buttonStyle='btn--navbar'
                buttonSize='btn--small'
                onClick={closeMobileMenu}
              >RESUME
        </Button>

            </li>


            {/* <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link> */}


            {/* </li>  */}


          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
