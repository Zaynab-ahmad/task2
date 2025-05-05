import SectionsHeader from "../SectionsHeader/SectionsHeader";
import CardsSliderLeftAR from "../Sliders/CardsSliderLeftAR/CardsSliderLeftAR";
import BenefitsCards from "../Cards/BenefitsCards/BenefitsCards";
import "./AwardsSec.css";
import { IoFlagSharp } from "react-icons/io5";

export default function AwardsSec() {
  const cardData = [
    {
      icon: <img src="/Icons/percent.svg" alt="percent" />,
      title: "Outstanding Early Childhood Education Award",
      text: "Presented by the National Association for the Education of Young Children (NAEYC)...",
    },
    {
      icon: <img src="/Icons/data.svg" alt="data" />,
      title: "Innovative STEAM Education Award",
      text: "Awarded by the Education Excellence Association for our pioneering STEAM programs...",
    },
    {
      icon: <img src="/Icons/light.svg" alt="light" />,
      title: "Environmental Stewardship Award",
      text: "Received from the Green Earth Society for our dedication to environmental education...",
    },
    {
      icon: <IoFlagSharp />,
      title: "Play-Based Learning",
      text: "We believe in the power of play to foster creativity, problem-solving, and imagination.",
    },
    {
      icon: <img src="/Icons/danger.svg" alt="danger" />,
      title: "Individualized Attention",
      text: "Our small class sizes enable personalized attention, catering to each child’s needs.",
    },
    {
      icon: <img src="/Icons/people.svg" alt="people" />,
      title: "Parent Involvement",
      text: "We foster a strong parent-school partnership for better communication and collaboration.",
    },
  ];

  const renderedCards = cardData.map((item, index) => (
    <BenefitsCards
      key={index}
      icon={item.icon}
      title={item.title}
      text={item.text}
    />
  ));

  return (
    <div className="MainContainer">
      <SectionsHeader
        title="Our Achievements"
        header="Our Awards and Recognitions"
        text="Little Learners Academy takes pride in our commitment to delivering high-quality education..."
        margin={true}
        location="center"
        fontSize="big"
      />
      <CardsSliderLeftAR
        initialCardsToShow={3}
        data={renderedCards}
        title="8 More Awards"
        gal={false}
      />
    </div>
  );
}
