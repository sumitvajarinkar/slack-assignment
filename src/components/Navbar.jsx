import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">Slack</div>
        <ul className="nav-links">
          <li>Product</li>
          <li>Enterprise</li>
          <li>Resources</li>
          <li>Pricing</li>
        </ul>
        <div className="nav-buttons">
            <span className="search-icon">🔍</span>
            <span className="sign-in">Sign In</span>
          <button className="btn-outline">Talk to sales</button>
          <button className="btn-primary">Try for Free</button>
        </div>
      </nav>
      <div className="notification">
        <span>Slack is your digital HQ.....</span>
        <span>X</span>
      </div>
    </>
  );
};

export default Navbar;
