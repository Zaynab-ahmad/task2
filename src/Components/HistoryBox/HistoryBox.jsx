import "./HistoryBox.css";

export default function HistoryBox({ year, title, text, yearRef }) {
  return (
    <div className="HistoryBox FlexRow">
      <div className="TimelineItemLine FlexRow">
        <div
          ref={yearRef}
          className="TimelineContentYear FlexRow SharedBorder SharedShadow"
        >
          <span className="HLine"></span>
          <img
            className="TimelineContentYearImg"
            src="/Icons/Timeline.svg"
            alt="Timeline marker"
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
