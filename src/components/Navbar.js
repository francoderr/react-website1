import React, {useState, useEffect} from 'react'
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
      if(window.innerWidth <= 960) {
          setButton(false);
      } else {
          setButton(true);
      }
  };

  useEffect(() => {
      showButton()
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className="navbar">
            <div className='navbar-container'>
                <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
                    JR Sounds <i className='fab fa-typo3'/>
                </a>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} ></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a href='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </a>
                    </li> 
                    <li className='nav-item'>
                        <a href='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/products' className='nav-links' onClick={closeMobileMenu}>
                            Products
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Signup
                        </a>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline' className="signup-btn">SIGN UP</Button>}            {/*checks state of button and returns button component if true*/}
            </div>
        </nav>
    </>
  )
}

export default Navbar