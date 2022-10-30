import React from "react";
import Slider from "./Slider";
import "./SliderCard.css";

const SliderCard = ({ SliderData }) => {
  const slides = SliderData.map((s, id) => (
    <Slider data={s} key={`slide_${s.title}_${s.id}`} />
  ));

  return (
    <div className="slider-card">
      <div className="slider-inner-container">{slides}</div>
    </div>
  );
};
export default SliderCard;
