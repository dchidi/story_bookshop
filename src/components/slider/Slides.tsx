import React from "react";
import style from "./Slider.module.css";

type TextObj = {
  text1: string;
  text2: string;
};

interface ISlide {
  onClick: () => void;
  image?: string;
  text?: TextObj;
  imageDescription?: string;
}

export const SlideOne: React.FC<ISlide> = ({
  onClick,
  image,
  imageDescription,
}) => {
  return (
    <div onClick={onClick} className={style.slideOne}>
      <img src={image} alt={imageDescription} />
    </div>
  );
};
