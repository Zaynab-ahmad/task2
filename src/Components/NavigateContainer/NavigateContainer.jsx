import NavigateCard from "../Cards/NavigateCard/NavigateCard";
import "./NavigateContainer.css";

export default function NavigateContainer() {
  const data = [
    {
      title: "About Us",
      text: "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
    },
    {
      title: "Student Life",
      text: "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
    },
    {
      title: "Academics",
      text: "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
    },
    {
      title: "Admissions",
      text: "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
    },
  ];

  return (
    <div className="NavigateContainer">
      {data.map((item, index) => (
        <NavigateCard key={index} title={item.title} text={item.text} />
      ))}
    </div>
  );
}
