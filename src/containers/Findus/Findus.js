import React from "react";
import "./Findus.css";
import { images } from "../../constants/index";
import SubHeading from "../../components/subheading/SubHeading";

const Findus = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant">Find Us</h1>
        <p className="p__opensans" style={{ color: "#AAA", margin: "1rem 0" }}>
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>
        <p className="p__cormorant" style={{ color: "#DCCA87", margin:"2rem 0"}}>
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>

      <div className="app__wrapper_img">
        <img src={images.findus} alt="" />
      </div>
    </div>
  );
};

export default Findus;
