import React from "react";
import "./MenuItem.css";

const MenuItem = ({ title, price, tag }) => {
  return (
    <div className="app__menuitem">
      <div className="app__menuitem-head">
        <div className="app__menuitem-head_name">
          <p>{title}</p>
        </div>

        <div className="app__menuitem-head_dash"></div>

        <div className="app__menuitem-price">
          <p className="p__opensans">{price}</p>
        </div>
      </div>

      <div className="app__menuitem-sub">
        <p className="p__opensans">{tag}</p>
      </div>
    </div>
  );
};

export default MenuItem;
