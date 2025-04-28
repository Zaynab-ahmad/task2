import BenefitsCardsSec from '../BenefitsCardsSec/BenefitsCardsSec';
import SectionsHeader from '../SectionsHeader/SectionsHeader'
import './BenefitsSec.css'

export default function BenefitsSec() {
  return (
    <div className="MainContainer">
      <div className="BenefitsSec Flex">
        <SectionsHeader
          title="Children Deserve Bright Future"
          header="Our Benefits"
          text="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
        />
        <BenefitsCardsSec />
      </div>
    </div>
  );
}
