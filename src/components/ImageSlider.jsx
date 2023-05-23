import "./ImageSlider.css";
import menCover from "../images/HomePage/Men-cover-img.webp";
import womenCover from "../images/HomePage/Women-cover-img.webp";
import kidCover from "../images/HomePage/kids-cover-img.jpg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const imgArr = [
    { imgUrl: menCover, category: "Men" },
    { imgUrl: womenCover, category: "Women" },
    { imgUrl: kidCover, category: "Kids" },
  ];

  const sliderStyle = (indexValue) => ({
    width: "100vw",
    height: "100vh",
    transition: "all 0.8s ease",
    transform: `translateX(-${indexValue * 100}vw)`,
  });

  const handleSlider = (direction) => {
    if (direction === "left") {
      setIndex((index) => (index > 0 ? index - 1 : 2));
    } else {
      setIndex((index) => (index < 2 ? index + 1 : 0));
    }
  };
  return (
    <div className="slider-container">
      <i
        className="fas fa-arrow-left arrow-left"
        onClick={() => handleSlider("left")}
      ></i>
      <div className="wrapper">
        {imgArr.map(({ imgUrl, category }) => {
          return (
            <div style={sliderStyle(index)} key={imgUrl}>
              <div className="image-container">
                <img alt="cover img" src={imgUrl} className="cover-image" />
              </div>

              <NavLink
                className="slider-image-link"
                to="/products"
                // onClick={() => {
                //   dispatchFilter({
                //     type: "SET_CATEGORY_FILTER",
                //     payload: category,
                //   });
                // }}
              >
                Shop Now
              </NavLink>
            </div>
          );
        })}
      </div>
      <i
        className="fas fa-arrow-right arrow-right"
        onClick={() => handleSlider("right")}
      ></i>
    </div>
  );
};
