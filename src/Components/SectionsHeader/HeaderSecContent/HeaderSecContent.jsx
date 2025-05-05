import { useEffect, useState } from "react";
import "./HeaderSecContent.css";

export default function HeaderSecContent({ header, text, fontSize, location }) {
  const [calculatedFontSize, setCalculatedFontSize] = useState(58);

  useEffect(() => {
    const updateFontSize = () => {
      const width = window.innerWidth;

      if (fontSize === "big") {
        if (width <= 990) setCalculatedFontSize(38);
        else if (width <= 1440) setCalculatedFontSize(48);
        else setCalculatedFontSize(58);
      } else {
        if (width <= 990) setCalculatedFontSize(28);
        else if (width <= 1440) setCalculatedFontSize(38);
        else setCalculatedFontSize(48);
      }
    };

    updateFontSize();
    window.addEventListener("resize", updateFontSize);
    return () => window.removeEventListener("resize", updateFontSize);
  }, [fontSize]);

  const alignmentClass =
    location === "center" ? "AlignCenter TextCenter" : "AlignLeft TextLeft";

  return (
    <div className={`HeaderSecContent Flex ${alignmentClass}`}>
      <h2 style={{ fontSize: `${calculatedFontSize}px` }}>{header}</h2>
      <p className="SharedFont HeaderSecContentP">{text}</p>
    </div>
  );
}


