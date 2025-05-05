import BenefitsCardsSec from "../BenefitsCardsSec/BenefitsCardsSec";
import SectionsHeader from "../SectionsHeader/SectionsHeader";
import "./BenefitsSec.css";

export default function BenefitsSec({ data, title, header, text }) {
  return (
    <div className="MainContainer">
      <div className="BenefitsSec Flex">
        <SectionsHeader
          title={title}
          header={header}
          text={text}
          margin={true}
          location="center"
          fontSize="big"
        />
        <BenefitsCardsSec data={data} />
      </div>
    </div>
  );
}
