import React from "react";
import "./Laurels.css";
import SubHeading from "../../components/subheading/SubHeading";
import { images, data } from "../../constants";

const Laurels = () => {

  const AwardsCard = ({image, title, subtitle}) => {
   return (
     <div className="app__laurels-award_card">
       <img src={image} alt="awardimg" />
       <div className="app__laurels-award_card-content">
         <p className="p__cormorant" style={{color:"#DCCA87"}}>{title}</p>
         <p className="p__opensans">{subtitle}</p>
       </div>
     </div>
   );
  };

  return (
    <div className="app__laurels app__bg app__wrapper section__padding">
      <div className="app__laurels-logo">
        <img src={images.logo} alt="" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="Awards and Achievements" />
        <h1 className="headtext__cormorant">Our Laurels</h1>

        <div className="app__laurels-awards">
          {data.awards.map((item) => {
            return (
              <AwardsCard
                image={item.imgUrl}
                title={item.title}
                subtitle={item.subtitle}
              />
            );
          })}
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.laurels} alt="" />
      </div>
    </div>
  );
};

export default Laurels;
