import BenefitsSec from "../../Components/BenefitsSec/BenefitsSec";
import FAQ from "../../Components/FAQ/FAQ";
import Hero from "../../Components/Hero/Hero";
import NavigateSec from "../../Components/NavigateSec/NavigateSec";
import TestimonialsSec from "../../Components/TestimonialsSec/TestimonialsSec";

export default function Home() {
  return (
    <div>
      <Hero />
      <BenefitsSec />
      <TestimonialsSec />
      <FAQ />
      <NavigateSec />
    </div>
  );
}
