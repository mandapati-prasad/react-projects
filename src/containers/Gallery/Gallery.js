import React, { useRef } from "react";
import "./Gallery.css";
import SubHeading from "../../components/subheading/SubHeading";
import { VscArrowSmallRight, VscArrowSmallLeft } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa";
import { images } from "../../constants";

const Gallery = () => {
  const galleryImages = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    }
    if (direction === "right") {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button className="custom__button">View More</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((img, index) => {
            return (
              <div
                className="app__gallery-images_card flex__center"
                key={`gallery_image-${index + 1}`}
              >
                <img src={img} alt="gallery" />
                <FaInstagram className="app__gallery-images-card_insta" />
              </div>
            );
          })}
        </div>

        <div className="app__gallery-images_arrows">
          <VscArrowSmallLeft
            className="app__gallery_arrow-icon"
            onClick={() => scroll("left")}
          />
          <VscArrowSmallRight
            className="app__gallery_arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
