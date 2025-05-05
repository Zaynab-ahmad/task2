import FeatureCard from "../Cards/FeatureCard/FeatureCard";
import SectionsHeader from "../SectionsHeader/SectionsHeader";
import "./FeaturesSec.css";

export default function FeaturesSec() {
  const data = [
    {
      src: "/Images/Feature1.png",
      title: "Language Arts",
      content: "Reading, writing, storytelling, and communication skills.",
    },
    {
      src: "/Images/Feature2.png",
      title: "Mathematics",
      content: "Number sense, basic operations, problem-solving, and logic.",
    },
    {
      src: "/Images/Feature3.png",
      title: "Science",
      content:
        "Exploring the natural world through hands-on experiments and investigations.",
    },
    {
      src: "/Images/Feature4.png",
      title: "Social Studies",
      content:
        "Cultivating an understanding of diverse cultures and communities.",
    },
    {
      src: "/Images/Feature5.png",
      title: "Arts and Crafts",
      content: "Encouraging creativity through various art forms and crafts.",
    },
    {
      src: "/Images/Feature6.png",
      title: "Physical Education",
      content: "Promoting physical fitness, coordination, and teamwork.",
    },
  ];

  return (
    <div className="MainContainer">
      <SectionsHeader
        title="Our Features"
        header="What Students Learn"
        text="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
        margin={true}
        location="center"
        fontSize="big"
      />
      <div className="FeatureCardsSec">
        {data.map((item, index) => (
          <FeatureCard
            key={index}
            src={item.src}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}
