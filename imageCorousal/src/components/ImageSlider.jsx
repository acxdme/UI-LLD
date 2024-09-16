import React, { useEffect, useState } from "react";
import { ImageArr } from "../assets/images/images";
import { leftArrow, rightArrow } from "../assets/images/images";
import "../App.css";

function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const navigateNextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % ImageArr.length);
  };

  const navigatePreviousImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? ImageArr.length - 1 : prevIndex - 1
    );
  };

  useEffect(()=>{
    let t = setInterval(()=>{
    setActiveIndex((prevIndex) => (prevIndex + 1) % ImageArr.length);
    },4000)

    //cleanup
    return () => clearInterval(t);
  },[])
  return (
    <div className="sliderContainer">
      <img
        src={leftArrow}
        className="arrow left"
        onClick={() => navigatePreviousImage()}
      />
      <img src={ImageArr[activeIndex]} className="mainImages" />
      <img
        src={rightArrow}
        className="arrow right"
        onClick={() => navigateNextImage()}
      />
    </div>
  );
}

export default ImageSlider;
