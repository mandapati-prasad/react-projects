import React, { useState } from "react";
import "./Navbar.css";
import { images } from "../../constants";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="logo" />
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <ul className="app__navbar-login">
        <li className="p__opensans">
          <a href="#">Login / Register</a>
        </li>
        <div />
        <li className="p__opensans">
          <a href="#">BooK Table</a>
        </li>
      </ul>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          size={27}
          onClick={() => setToggle(true)}
        />
        {toggle && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdRestaurantMenu
              className="overlay_close"
              onClick={() => setToggle(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#about">About</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">Menu</a>
              </li>
              <li className="p__opensans">
                <a href="#awards">Awards</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
