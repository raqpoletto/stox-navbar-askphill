import React from "react";

const Slider = ({ data }) => {
  return (
    <div className="slider">
      <div className="slider-container">
        <div className="slider-image">
          <img src={data.image} alt={data.title} />
        </div>
        <div className="slider-title">
          <h2>{data.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Slider;
