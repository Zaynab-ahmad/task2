import "./HeroContent.css";
import NumbersBox from "./NumbersBox/NumbersBox";

export default function HeroContent({
  smallHeading,
  mainHeading,
  highlightedText,
  paragraph,
  numbersData,
}) {
  return (
    <div className="HeroContent Flex">
      <div className="Content Flex">
        {(smallHeading || mainHeading || highlightedText) && (
          <div>
            {smallHeading && <h3 className="HeroHerder">{smallHeading}</h3>}
            {(mainHeading || highlightedText) && (
              <h2 className="HeroMainHerder">
                {mainHeading}{" "}
                {highlightedText && <span>{highlightedText}</span>}
              </h2>
            )}
          </div>
        )}
        {paragraph && <p className="HeroText SharedFont">{paragraph}</p>}
      </div>

      {numbersData?.length > 0 && (
        <div className="HeroBox SharedBorder">
          {numbersData.map((item, index) => (
            <NumbersBox key={index} num={item.num} text={item.text} />
          ))}
        </div>
      )}
    </div>
  );
}
