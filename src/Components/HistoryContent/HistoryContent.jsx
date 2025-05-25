import { useEffect, useRef, useState } from "react";
import HistoryBox from "../HistoryBox/HistoryBox";
import "./HistoryContent.css";

const timelineData = [
  {
    year: "2023",
    title: "Resilience and Future Horizons",
    text: "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.",
  },
  {
    year: "2017",
    title: "Innovation and Technology",
    text: "Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students.",
  },
  {
    year: "2012",
    title: "Expansion and Recognition",
    text: "These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies.",
  },
  {
    year: "2005",
    title: "Inception and Growth",
    text: "Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth.",
  },
];

export default function HistoryContent() {
  const wrapperRef = useRef(null);
  const firstYearRef = useRef(null);
  const lastYearRef = useRef(null);
  const [lineStyle, setLineStyle] = useState({});

  const updateLineStyle = () => {
    if (wrapperRef.current && firstYearRef.current && lastYearRef.current) {
      const wrapperTop = wrapperRef.current.getBoundingClientRect().top;
      const first = firstYearRef.current.getBoundingClientRect();
      const last = lastYearRef.current.getBoundingClientRect();

      const topOffset = first.top - wrapperTop + first.height / 2;
      const bottomOffset = last.top - wrapperTop + last.height / 2;

      setLineStyle({
        top: `${topOffset}px`,
        height: `${bottomOffset - topOffset}px`,
      });
    }
  };

  useEffect(() => {
    updateLineStyle();
    window.addEventListener("resize", updateLineStyle);

    return () => {
      window.removeEventListener("resize", updateLineStyle);
    };
  }, []); // إزالة timelineData من مصفوفة الاعتمادات

  if (!timelineData.length) {
    return <div>No timeline data available.</div>;
  }

  return (
    <div
      ref={wrapperRef}
      className="SharedBorder SharedShadow HistoryContentWrapper"
    >
      <div className="VerticalLine" style={lineStyle}></div>
      <div className="HistoryContent Flex">
        {timelineData.map((item, index) => (
          <HistoryBox
            key={index}
            year={item.year}
            title={item.title}
            text={item.text}
            yearRef={
              index === 0
                ? firstYearRef
                : index === timelineData.length - 1
                ? lastYearRef
                : null
            }
          />
        ))}
      </div>
    </div>
  );
}
