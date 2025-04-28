import "./TestimonialCard.css";

export default function TestimonialCard({ icon, name, text }) {
  return (
    <div className="TestimonialCard Flex SharedBorder SharedShadow">
      <div className="Profile">
        <img src={icon} alt="" />
      </div>
      <p>{name}</p>
      <div className="Rating">
        <img src="Icons/Rating.png" alt="rating" />
      </div>
      <div className="SharedFont">{text}</div>
    </div>
  );
}
