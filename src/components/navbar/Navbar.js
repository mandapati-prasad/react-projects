import React, { useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">What is GPT</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#blogs">Library</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="gpt3_navbar">
      <div className="gpt3_navbar-links">
        <div className="gpt3_navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="gpt3_navbar-links_contianer">
          <Menu />
        </div>
      </div>

      <div className="gpt3_navbar-sign">
        <p>
          <a href="#">sign in</a>
        </p>
        <button type="button">Sign Up</button>
      </div>

      <div className="gpt3_navbar-menu">
        {toggle ? (
          <RiCloseFill
            color="#fff"
            size={27}
            onClick={() => setToggle(false)}
          />
        ) : (
          <RiMenu3Fill color="#fff" size={27} onClick={() => setToggle(true)} />
        )}

        {toggle && (
          <div className="gpt3_navbar-menu_container scale-up-center">
            <div className="gpt3_navbar-menu_container-links">
              <Menu />
            </div>
            <div className="gpt3_navbar-menu_container-links-sign">
              <p>
                <a href="#">sign in</a>
              </p>
              <button type="button">Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
