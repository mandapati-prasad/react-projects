import React from "react";
import "./Footer.css";
import FooterOverlay from "../../components/footer/FooterOverlay";
import NewsLetter from "../../components/footer/NewsLetter";
import { images } from "../../constants";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <FooterOverlay />
      <NewsLetter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-links_heading">Contact Us</h1>
          <p className="p__opensans">9 W 53rd St, New York, NY</p>
          <p className="p__opensans">10019, USA</p>
          <p className="p__opensans">+1 212-344-1230</p>
          <p className="p__opensans"> +1 212-555-1230</p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footer-logo" />
          <p className="p__opensans">
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <img src={images.spoon} alt="spoon" className="spoon" />
          <div className="app__footer-links_icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
        <div className="app__footer-links_work">
          <h1 className="app__footer-links_heading">Working Hours</h1>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00 am -12:00 am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00am -11:00 pm</p>
        </div>
      </div>

      <div className="app__footer-copyright">
        <p className="p__opensans">2021 Gerícht. All Rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
