import React from "react";
import './Header.css'
const Header = () => {
  return (
    <div className="header navbar-container">
      <div className="logo-container">
        {/* icon */}
        <img src="/images/logo.jpg" width={40} height={40} />
      </div>
      <div>
        <ul className="navbar-section-one">
          <li>HOME</li>
          <li>CATEGORIES</li>
          <li>CONTACT US</li>
        </ul>
      </div>
      <div>
        <ul className="navbar-section-one">
          <li> <img className="navbar-icons" src="/images/search.svg" width={40} height={40} /></li>
          <li> <img className="navbar-icons" src="/images/shopping-cart.svg" width={40} height={40} /></li>
          <li> <img className="navbar-icons" src="/images/user.svg" width={40} height={40} /></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
