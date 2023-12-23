import React from "react";
import "./Menu.css";
import SubHeading from "../../components/subheading/SubHeading";
import MenuItem from "../../components/menuitems/MenuItem";
import { data, images } from "../../constants";

const Menu = () => {
  return (
    <div className="app__specialmenu flex__center section__padding" id="menu">
      <div className="app__specialmenu-title">
        <SubHeading title="Menu that fits you palatte" />
        <h1 className="headtext__cormorant">Today’s Special</h1>
      </div>

      <div className="app__specialmenu-menu">
        <div className="app__specialmenu-menu_wines">
          <p className="app__specialmenu-menu_heading">Wine & Beer</p>
          <div className="app__specialmenu-menu_menuitem">
            {data.wines.map((item, index) => {
              return (
                <MenuItem
                  key={item.title + index}
                  title={item.title}
                  price={item.price}
                  tag={item.tags}
                />
              );
            })}
          </div>
        </div>

        <div className="app__specialmenu-menu_image">
          <img src={images.menu} alt="" />
        </div>

        <div className="app__specialmenu-menu_coctails">
          <p className="app__specialmenu-menu_heading">Cocktails</p>
          <div className="app__specialmenu-menu_menuitem">
            {data.cocktails.map((item, index) => {
              return (
                <MenuItem
                  key={item.title + index}
                  title={item.title}
                  price={item.price}
                  tag={item.tags}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="app__menuitem-button">
        <button className="custom__button">View Menu</button>
      </div>
    </div>
  );
};

export default Menu;
