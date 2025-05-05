import MissionCard from "../Cards/MissionCard/MissionCard";
import SectionsHeader from "../SectionsHeader/SectionsHeader";
import "./MissionSec.css";

export default function MissionSec() {
  return (
    <div className="MainContainer">
      <SectionsHeader
        title="Mission & Visions"
        header="Our Mission & Visions"
        text="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
        margin={true}
        location="center"
        fontSize="big"
      />
      <div className="MCardsContainer FlexRow">
        <MissionCard
          title="Mission"
          text="At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey."
          icon="Icons/Mission.svg"
        />
        <MissionCard
          title="Vision"
          text="Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity."
          icon="Icons/vision.svg"
        />
      </div>
    </div>
  );
}

