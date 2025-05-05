import BenefitsSec from "../../Components/BenefitsSec/BenefitsSec";
import FAQ from "../../Components/FAQ/FAQ";
import Hero from "../../Components/Hero/Hero";
import NavigateSec from "../../Components/NavigateSec/NavigateSec";
import TestimonialsSec from "../../Components/TestimonialsSec/TestimonialsSec";
import { FaCrown } from "react-icons/fa";
import { FaMaskFace } from "react-icons/fa6";
import { IoFlagSharp } from "react-icons/io5";

export default function Home() {
    const data = [
      {
        icon: <img src="Icons/graduaion.svg" alt="Graduation" />,
        title: "Holistic Learning Approach",
        text: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
      },
      {
        icon: <FaCrown />,
        title: "Experienced Educators",
        text: "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
      },
      {
        icon: <FaMaskFace />,
        title: "Nurturing Environment",
        text: "We prioritize safety and provide a warm and caring atmosphere for every child.",
      },
      {
        icon: <IoFlagSharp />,
        title: "Play-Based Learning",
        text: "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
      },
      {
        icon: <img src="Icons/danger.svg" alt="Danger" />,
        title: "Individualized Attention",
        text: "Our small class sizes enable personalized attention, catering to each child's unique needs.",
      },
      {
        icon: <img src="Icons/people.svg" alt="People" />,
        title: "Parent Involvement",
        text: "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
      },
    ];
  return (
    <div>
      <Hero />
      <BenefitsSec
        title="Children Deserve Bright Future"
        header="Our Benefits"
        text="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
        data={data}
      />
      <TestimonialsSec />
      <FAQ />
      <NavigateSec />
    </div>
  );
}
