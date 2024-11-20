import React from "react";
import { SlideOne } from "./Slides";
import style from "./Slider.module.css";
import Button from "../button/Button";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import useSlider from "./hooks/useSlider";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Slider: React.FC = () => {
  const slides = [
    <SlideOne
      onClick={() => {}}
      image="echoes_of_a_forgotten_world.png"
      imageDescription="Echoes of a forgotten world"
    />,
    <SlideOne
      onClick={() => {}}
      image="my_identity.png"
      imageDescription="My Identity"
    />,
  ];
  const { slideIndex, nextSlide, prevSlide } = useSlider(slides.length);

  return (
    <div className={style.slider}>
      <div className={style.slides}>
        <TransitionGroup>
          <CSSTransition key={slideIndex} timeout={500} classNames="fade">
            <div className={style.slideWrapper}>{slides[slideIndex]}</div>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <div className={style.navigation}>
        <Button onclick={prevSlide} aria-label="Previous Slide">
          <FaArrowLeftLong size={40} />
        </Button>
        <Button onclick={nextSlide} aria-label="Next Slide">
          <FaArrowRightLong size={40} />
        </Button>
      </div>
    </div>
  );
};

export default Slider;
