import BenefitsCards from "../Cards/BenefitsCards/BenefitsCards";
import "./BenefitsCardsSec.css";


export default function BenefitsCardsSec({data}) {
  
  return (
    <div className="BenefitsCardsSec">
      {data.map((item, index) => (
        <BenefitsCards
          key={index}
          icon={item.icon}
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  );
}
