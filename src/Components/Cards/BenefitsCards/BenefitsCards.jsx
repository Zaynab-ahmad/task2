import "./BenefitsCards.css";

export default function BenefitsCards({ icon, title, text }) {
  return (
    <div className="BenefitsCards Flex SharedShadow SharedBorder">
      <div className="BenefitsCardsIcon SharedBorder">{icon}</div>
      <h3>{title}</h3>
      <p className="SharedFont">{text}</p>
    </div>
  );
}
