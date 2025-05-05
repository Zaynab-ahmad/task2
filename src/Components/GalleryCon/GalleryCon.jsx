import { useEffect, useRef } from "react";
import "./GalleryCon.css";
import CardsSliderLeftAR from "../Sliders/CardsSliderLeftAR/CardsSliderLeftAR";

export default function GalleryCon({data, title, content}) {
  const sliderRef = useRef(null);

  const renderedCards = data.map((src, index) => (
    <div key={index} className="GalleryCard SharedBorder">
      <img
        src={src}
        alt={`Gallery ${index + 1}`}
        className="GalleryCardImg"
      />
    </div>
  ));

  useEffect(() => {
    const updatePosition = () => {
      if (sliderRef.current) {
        const height = sliderRef.current.offsetHeight;
        sliderRef.current.style.top = `-${height / 2.5}px`;
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  return (
    <div className="GalleryContainer">
      <div className="GalleryCon SharedBorder SharedShadow Flex">
        <div className="GallerySlider" ref={sliderRef}>
          <CardsSliderLeftAR
            initialCardsToShow={4}
            data={renderedCards}
            title={title}
            gal={true}
          />
        </div>
        <p className="SharedFont GalleryContent">{content}</p>
      </div>
    </div>
  );
}
