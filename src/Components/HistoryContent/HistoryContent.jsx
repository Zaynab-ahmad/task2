import HistoryBox from "../HistoryBox/HistoryBox";
import "./HistoryContent.css";

export default function HistoryContent() {
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

  return (
    <div className="SharedBorder SharedShadow HistoryContentWrapper">
      <div className="TimelineContainer">
        <img src="Icons/VLine.svg" alt="Vertical Line" className="VLine" />
        <div className="HistoryContent Flex">
          {timelineData.map((item, index) => (
            <HistoryBox
              key={index}
              year={item.year}
              title={item.title}
              text={item.text}
              isLast={index === timelineData.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
