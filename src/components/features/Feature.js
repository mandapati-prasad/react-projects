import React from "react";
import "./features.css"

const Feature = ({title, text}) => {
  return (
    <div className="gpt3_features-container-features">
      <div className="gpt3_features-container-features-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt3_features-container-features-text">
        <p>{ text }</p>
      </div>
    </div>
  );
};

export default Feature;
