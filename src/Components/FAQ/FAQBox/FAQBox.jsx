import { useState } from "react";
import "./FAQBox.css";

export default function FAQBox({qus, ans}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`FAQBox SharedBorder Flex ${isOpen ? "Open" : ""}`}>
        <div className="TopRow">    
        <p className="Qustion">{qus}</p>
      <button className="FAQBtn SharedBorder" onClick={toggleFAQ}>
        {isOpen ? "-" : "+"}
      </button>
        </div>
        {isOpen && (
          <p className="Answer SharedFont">
           {ans}
          </p>
        )}
    </div>
  );
}
