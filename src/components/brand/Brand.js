import React from "react";
import { google, slack, dropbox, atlassian, shopify } from "./images"
import "./brand.css"

const Brand = () => {
  return (
    <div className="gpt3_brand section_padding">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
    </div>
  );
};

export default Brand;
