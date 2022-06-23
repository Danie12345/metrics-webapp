import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { setCountry } from '../../redux/country/country';
import './Nav.css';

const logo = require('../../assets/logo.png');

const Nav = () => {
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu((openMenu) => !openMenu);
  };

  const countrySelect = (country) => {
    setCountry(dispatch, country);
  };

  const links = [
    {
      path: 'continents',
      text: 'Continents',
    },
  ];

  return (
    <nav className="navBar">
      <div className="logo-container">
        <img src={logo} alt="Cool logo." className="logo-img" />
        <h1>Air Pollution Ranks</h1>
      </div>
      {openMenu ? (<AiOutlineClose onClick={() => toggleMenu()} className="menu-icon" />) : (<AiOutlineMenu onClick={() => toggleMenu()} className="menu-icon" />)}
      <ul className="navUl">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className="nav-link"
              onClick={() => { countrySelect({}); }}
            >
              <span>{link.text.toUpperCase()}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className="mobile-navUl" style={{ transform: openMenu ? 'translateX(0)' : 'translateX(120%)' }}>
        {links.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} className="nav-link mobile" onClick={() => toggleMenu()}>
              <span>{link.text.toUpperCase()}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
