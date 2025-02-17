import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
       Header
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/Signup-Profile">Signup</Link>
          </li>
          <li>
            <Link to="/Signup-Profile/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
