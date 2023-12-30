import React from "react";
import { footerLinks, socialMedia } from "../constants";
import { logo } from "../assets";
import darklogo from "../assets/darklogo.svg";

const Footer = ({ theme }) => {
  return (
    <section className={`pt-10 sm:pt-20`}>
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex-1 md:max-w-[35%] flex flex-col mb-5 md:mb-0">
          <img
            src={theme === "dark" ? logo : darklogo}
            alt="logo"
            className="w-[250px] h-[70px]"
          />
          <p className="max-w-[280px] mt-4 text-lg font-medium text-gray-700 dark:text-gray-300">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex-1 flex flex-wrap gap-8 mt-5 md:mt-0  sm:flex-row justify-between dark:text-white font-poppins">
          {footerLinks.map((footerlink, index) => {
            return (
              <div>
                <h1 className="text-xl font-semibold">{footerlink.title}</h1>
                {footerlink.links.map((link, index) => {
                  return (
                    <p
                      className="mt-3 text-sm sm:text-base dark:text-gray-400
                    text-gray-600 dark:hover:text-cyan-300 hover:text-cyan-500 cursor-pointer"
                    >
                      {link.name}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full flex flex-col sm:flex-row justify-between items-center mt-8 sm:mt-14 border-t-2 border-gray-700 py-6 sm:py-8">
        <div className="flex dark:text-gray-300">
          <p>Copyright &copy;
          2021 HooBank. All Rights Reserved.</p>
        </div>
        <div className="flex items-center">
          {
            socialMedia.map((icon, index) => {
              return <div className={`text-2xl md:text-3xl ${index !== socialMedia.length - 1 ? 'mr-5' : 'mr-0'} dark:text-white text-gray-700 dark:hover:text-cyan-400 hover:text-cyan-500 mt-5 sm:mt-0`}>
                {icon.icon}
              </div>
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Footer;
