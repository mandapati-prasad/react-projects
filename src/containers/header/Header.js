import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import aiface from "../../assets/ai.png"

const Header = () => {
  return (
    <div className="gpt3_header" id="home"> 
      <div className="gpt3_header-content section_padding">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <div className="gpt3_header-content-input">
          <input type="text" placeholder="Your Email Address"/>
          <button>Get Started</button>
        </div>

        <div className="gpt3_header-content-people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="gpt3_header-image">
        <img src={aiface} alt="aiface" />
      </div>
    </div>
  );
};

export default Header;
