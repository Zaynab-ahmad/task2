import './MissionCard.css';

export default function MissionCard({ title, text, icon }) {
  return (
    <div className="MissionCard Flex SharedBorder SharedShadow">
      <div className="MissionCardTop FlexRow">
        <h2 className="MissionCardTitle">{title}</h2>
        <img src={icon} alt="" className="MissionCardIcon" />
      </div>
      <div>
        <p className="SharedFont">{text}</p>
      </div>
    </div>
  );
}
