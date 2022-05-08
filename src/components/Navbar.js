import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "./images/logo.png";
import Dropdown from "../components/pages/Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [dropdown, showDropdown] = useState(false);

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

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={Logo} id="logo" alt="text" />
            Startup Overflow
          </NavLink>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/questions"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Questions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/videos"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Videos
              </NavLink>
            </li>

            <li
              className="nav-item "
              onMouseEnter={() => showDropdown(true)}
              onMouseLeave={() => showDropdown(false)}
            >
              <NavLink
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </NavLink>
              {dropdown && <Dropdown />}
            </li>

            <li className="nav-item">
              <NavLink
                to="/blogs"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Login
              </NavLink>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Login</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
