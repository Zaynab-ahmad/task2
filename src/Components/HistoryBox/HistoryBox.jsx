import "./HistoryBox.css";

export default function HistoryBox({ year, title, text, isLast }) {
  return (
    <div className="TimelineItem FlexRow">
      <div className="TimelineItemLine FlexRow">
        <div className="HlineDiv">
          <img src="/Icons/line.svg" alt="" className="Hline" />
        </div>
        <div className="TimelineContentYear FlexRow SharedBorder SharedShadow ">
          <img
            className="TimelineContentYearImg"
            src="/Icons/Timeline.svg"
            alt=""
          />
          <h3 className="TimelineContentYearH">{year}</h3>
        </div>
      </div>
      <div className="TimelineContent Flex">
        <h4 className="TimelineContentH">{title}</h4>
        <p className="SharedFont">{text}</p>
      </div>
    </div>
  );
}
