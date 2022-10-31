import React from "react";

const Slide = ({ data }) => {
  return (
    <div className="Slide">
      <div className="Slide-Bg"></div>
      <div className="Slide-Img">
        <img src={data.image} alt={data.title} />
      </div>
      <div className="Slide-Title">
        <h2>{data.title}</h2>
      </div>
    </div>
  );
};

export default Slide;
