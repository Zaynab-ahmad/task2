import HeaderSecBox from './HeaderSecBox/HeaderSecBox';
import HeaderSecContent from './HeaderSecContent/HeaderSecContent';
import './SectionsHeader.css';

export default function SectionsHeader({ title, header, text, margin, location, fontSize }) {
  const alignmentClass =
    location === "center"
      ? "AlignCenter TextCenter"
      : "AlignLeft TextLeft";


  return (
    <div
      className={`SectionsHeader Flex ${
        margin ? "MarginBot" : ""
      } ${alignmentClass}`}
    >
      <HeaderSecBox text={title} location={location} />
      <HeaderSecContent
        header={header}
        text={text}
        fontSize={fontSize}
        location={location}
      />
    </div>
  );
}
