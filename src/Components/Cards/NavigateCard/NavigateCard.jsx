import './NavigateCard.css'
import { FiArrowRight } from "react-icons/fi";


export default function NavigateCard({title, text}) {
  return (
    <div className="NavigateCard Flex SharedBorder SharedShadow">
      <div className="NavCardContent Flex">
        <h3 className="NavigateCardHead">{title}</h3>
        <img src="Icons/SeperateLine.png" alt="" className="NavigateCardSep" />
        <p className="SharedFont">{text}</p>
      </div>
      <button className="NavigateCardBtn SharedBorder SharedShadow SharedFont">
        Learn More <FiArrowRight />
      </button>
    </div>
  );
}
