import React, { useState } from 'react';
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from 'react-router-dom'; // Import Link


const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && '-100%' };
    }
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo1.png" alt="logo" width={100} />
        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <Link to="/Jobs2">Jobs</Link>
            <Link to="/Values">Our Values</Link>
            <Link to="/Contact">Contact Us</Link>
            <Link to="/Userlogin">Get Started</Link>
            <button className="button">
              <Link to="/Userlogin">User Login</Link>
              </button>
              <button className="button">
              <Link to="/Adminlogin">Admin Login</Link>
              </button>
            
          </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;