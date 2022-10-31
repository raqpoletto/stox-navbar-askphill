import Slide from "./Slide";
import "../style/SliderWrapper.scss";
import SliderData from "../data/SliderData";

const SliderWrapper = ({ slideData }) => {
  const slides = SliderData.map((id) => (
    <Slide data={id} key={`slide_${SliderData.title}_${SliderData.id}`} />
  ));

  return (
    <div className="SliderWrapper">
      <div className="SliderWrapper-Inner">{slides}</div>
    </div>
  );
};

export default SliderWrapper;
