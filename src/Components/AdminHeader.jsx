import React, { useState } from 'react';
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from 'react-router-dom'; // Import Link
import Stack from '@mui/material/Stack';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
          <Stack direction="row" spacing={3}>
      
      <Icon sx={{ fontSize: 50 }}><Link to="/AdminInsert">+</Link></Icon>
    </Stack>
            
            
    <Link to="/Adminprofile">
              <Stack>
                <AccountCircleIcon sx={{ fontSize: 50 }} />
              </Stack>
            </Link>   
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