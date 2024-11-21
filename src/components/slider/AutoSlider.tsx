import React from "react";
import style from "./Slider.module.css";
import Button from "../button/Button";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import useSlider from "./hooks/useSlider";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FaQuoteLeft } from "react-icons/fa";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { IoStar, IoStarHalf } from "react-icons/io5";

interface IComments {
  comment: string;
  username: string;
  rating: number;
}

const AutoSlider: React.FC<{ slides: IComments[] }> = ({ slides }) => {
  const { slideIndex, nextSlide, prevSlide } = useSlider(slides.length);
  const { comment, username, rating } = slides[slideIndex];

  return (
    <div className={style.sliderFooter}>
      <h2 className={style.footerTitle}>
        What people say <br />
        about us
      </h2>
      <div className={style.slides}>
        <TransitionGroup>
          <CSSTransition key={slideIndex} timeout={500} classNames="fade">
            <div className={style.slideWrapper}>
              <div>
                <ImQuotesLeft />
                &nbsp;
                {comment}&nbsp;
                <ImQuotesRight />
              </div>
              <div>
                {rating}
                <IoStar />
                <IoStarHalf />
              </div>
              <h4>{username}</h4>
            </div>
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

export default AutoSlider;
