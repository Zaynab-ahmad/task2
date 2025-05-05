import { useState, useEffect } from "react";
import TestimonialCard from "../../Cards/TestimonialCard/TestimonialCard";
import "./CardSlider.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function CardSlider({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());

  function getCardsToShow() {
    if (window.innerWidth <= 992) return 1;
    if (window.innerWidth <= 1200) return 2;
    return 3;
  }

  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(getCardsToShow());
      setCurrentIndex(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, data.length - cardsToShow);

  const getTranslateValue = () => {
    if (cardsToShow === 3) return 100;
    if (cardsToShow === 2) return 103;
    return 100;
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  return (
    <div className="CardSliderWrapper">
      <button
        className="OuterArrow Arrow Prev SharedBorder"
        onClick={handlePrev}
      >
        <FaArrowLeft />
      </button>

      <div className="CardSlider">
        <div
          className="CardSliderTrack"
          style={{
            transform: `translateX(-${
              currentIndex * (getTranslateValue() / cardsToShow)
            }%)`,
          }}
        >
          {data.map((item, index) => (
            <TestimonialCard
              key={index}
              name={item.name}
              text={item.text}
              icon={item.icon}
            />
          ))}
        </div>
      </div>

      <div className="ArrowWrapper">
        <button className="Arrow Prev1 SharedBorder" onClick={handlePrev}>
          <FaArrowLeft />
        </button>
        <button className="Arrow Next1 SharedBorder" onClick={handleNext}>
          <FaArrowRight />
        </button>
      </div>

      <button
        className="OuterArrow Arrow Next SharedBorder"
        onClick={handleNext}
      >
        <FaArrowRight />
      </button>
    </div>
  );
}
