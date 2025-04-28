import CardSlider from "../CardSlider/CardSlider";
import SectionsHeader from "../SectionsHeader/SectionsHeader";

export default function TestimonialsSec() {
  const data = [
    {
      icon: "Icons/Profile1.png",
      name: "Jennifer B",
      text: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
    },
    {
      icon: "Icons/profile2.png",
      name: "David K",
      text: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
    },
    {
      icon: "Icons/Profile3.png",
      name: "Emily",
      text: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
    },
    {
      icon: "Icons/Profile1.png",
      name: "Alex",
      text: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
    },
    {
      icon: "Icons/profile2.png",
      name: "Noah",
      text: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
    },
    {
      icon: "Icons/Profile3.png",
      name: "Karol",
      text: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
    },
  ];
  return (
    <div className="MainContainer">
      <SectionsHeader
        title="Their Happy Words 🤗"
        header="Our Testimonials"
        text="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
      />
      <CardSlider data={data} />
    </div>
  );
}
