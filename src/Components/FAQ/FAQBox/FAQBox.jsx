import { useState } from "react";
import "./FAQBox.css";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

export default function FAQBox({ qus, ans }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`FAQBox SharedBorder Flex ${isOpen ? "Open" : ""}`}>
      <div className="TopRow">
        <p className="Qustion">{qus}</p>
        <button className="FAQBtn SharedBorder" onClick={toggleFAQ}>
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {isOpen && <p className="Answer SharedFont">{ans}</p>}
    </div>
  );
}
