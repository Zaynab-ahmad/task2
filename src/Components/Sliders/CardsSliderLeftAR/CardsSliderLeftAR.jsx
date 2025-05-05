import "./CardsSliderLeftAR.css";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function CardsSliderLeftAR({ initialCardsToShow, data, gal, title }) {
  const getCardsToShow = () => {
    if (window.innerWidth <= 768) return 1;

    if (window.innerWidth <= 992) {
      if (gal) {
        return 2;
      } else {
        return 1;
      }
    }

    if (window.innerWidth <= 1200) {
      return Math.max(initialCardsToShow - 1, 1);
    }

    return initialCardsToShow;
  };

  const getGap = () => {
    return window.innerWidth > 1440 ? 30 : 40;
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(getCardsToShow());
  const [gap, setGap] = useState(getGap());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getCardsToShow());
      setGap(getGap());
      setCurrentIndex(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initialCardsToShow]);

  const maxIndex = Math.max(0, data.length - visibleCards);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const getTranslatePercentage = () => {
    const cardWidthPercentage = 100 / visibleCards;
    const gapPercentage =
      (gap * (visibleCards - 1)) / ((window.innerWidth * visibleCards) / 100);
    return cardWidthPercentage + gapPercentage / visibleCards;
  };

  return (
    <div className="CardsSliderLeftAR">
      <div className="SliderWrapperAR" style={{ overflow: "hidden" }}>
        <div
          className="CardSliderTrackAR"
          style={{
            display: "flex",
            transition: "transform 0.5s ease-in-out",
            transform: `translateX(-${
              currentIndex * getTranslatePercentage()
            }%)`,
            gap: visibleCards === 1 ? "20px" : `${gap}px`,
          }}
        >
          {data.map((card, index) => (
            <div
              key={index}
              style={{
                flex: `0 0 calc((100% - (${gap}px * (${visibleCards} - 1))) / ${visibleCards})`,
              }}
            >
              {card}
            </div>
          ))}
        </div>
      </div>

      <div className={`CardsSliderLeftBott Flex `}>
        <div className={`CardSliderH FlexRow ${gal ? "galwrap" : ""}`}>
          <p className={`${gal ? "GalleryTit" : "CardSliderTitle"}`}>{title}</p>

          <div className="ArrowWrapperL">
            <button className="Arrow Prev1 SharedBorder" onClick={handlePrev}>
              <FaArrowLeft />
            </button>
            <button className="Arrow Next1 SharedBorder" onClick={handleNext}>
              <FaArrowRight />
            </button>
          </div>
        </div>
        <p></p>
      </div>
    </div>
  );
}
