import { useState } from "react";

const useSlider = (totalSlides: number) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevSlideIndex) =>
      prevSlideIndex < totalSlides - 1 ? prevSlideIndex + 1 : prevSlideIndex
    );
  };

  const prevSlide = () => {
    setSlideIndex((prevSlideIndex) =>
      prevSlideIndex > 0 ? prevSlideIndex - 1 : prevSlideIndex
    );
  };

  return { slideIndex, nextSlide, prevSlide };
};

export default useSlider;
