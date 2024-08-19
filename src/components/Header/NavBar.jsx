import React from 'react';
import "./NavBar.css";
import PropTypes from 'prop-types'



function NavBar(navItems) {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item"><a href="#" className="nav-link">{navItems.first}</a></li>
        <li className="nav-item"><a href="#" className="nav-link">{navItems.second}</a></li>
        <li className="nav-item"><a href="#" className="nav-link">{navItems.third}</a></li>
        <li className="nav-item"><a href="#" className="nav-link">{navItems.fourth}</a></li>
      </ul>
    </nav>
  );
}

// This is to check the datatype of the props
NavBar.PropTypes = {
  first: PropTypes.string,
  second: PropTypes.string,
  third: PropTypes.string,
  fourth: PropTypes.string,
}

export default NavBar;





