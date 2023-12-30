import React, { useState } from "react";
import { logo } from "../assets";
import darklogo from "../assets/darklogo.svg";
import { navLinks } from "../constants";
import { IoSunny } from "react-icons/io5";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";

const Navbar = ({ theme, setTheme }) => {
  const [toggle, setToggle] = useState(false);

  const handleTheme = () => {
    setTheme((prev) => {
      let newTheme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <nav className="desktop-nav w-full flex justify-between items-center py-6">
      <img
        src={theme === "dark" ? logo : darklogo}
        alt=""
        className="w-[154px] h-[52px]"
      />
      <ul
        className={`flex ${
          toggle ? "visible" : "hidden"
        } flex-col flex-1 bg-gradient rounded-xl desktop-ul absolute right-3 top-20 sidebar min-w-[160px] items-center bg-black-gradient py-6 `}
      >
        {navLinks.map((link, index) => {
          return (
            <li
              key={index}
              className={`text-white desktop-li font-normal text-[16px] font-poppins ${
                index === navLinks.length - 1 ? "ss:mr-0" : "ss:mr-6"
              } mb-6 cursor-pointer`}
              onClick={() => setToggle(!toggle)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          );
        })}

        <li className="circle">
          <div className="w-[83px] rounded-full relative h-[38px] ss:bg-black ss:dark:bg-white bg-white flex justify-between items-center p-2">
            <div
              className={`${
                theme === "dark" ? "right" : "left"
              } w-10 ss:dark:bg-black border-2 ss:dark:border-white ss:border-black bg-black ss:bg-white transition-all h-full rounded-full absolute cursor-pointer shadow-ball dark:shadow-darkball`}
              onClick={handleTheme}
            ></div>

            <IoSunny className="text-3xl" />
            <BsFillMoonStarsFill className="ss:text-white text-2xl" />
          </div>
        </li>
      </ul>

      <div className="ss:hidden" onClick={() => setToggle(!toggle)}>
        {!toggle ? (
          <RiMenu3Line className="dark:text-white text-2xl" />
        ) : (
          <RiCloseLine className="dark:text-white text-3xl" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
