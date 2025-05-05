import MemberCard from "../Cards/MemberCard/MemberCard";
import SectionsHeader from "../SectionsHeader/SectionsHeader";
import './MemberSec.css'

export default function MembersSec() {
  const members = [
    {
      src: "/Images/Team1.png",
      name: "Ms. Sarah Anderson",
      mail: "sarah@example.com",
      qual: "Bachelor's Degree in Early Childhood Education",
      info: "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.",
    },
    {
      src: "/Images/Team2.png",
      name: "Mr. David Roberts",
      mail: "david@example.com",
      qual: "Master's Degree in Elementary Education",
      info: "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.",
    },
    {
      src: "/Images/Team3.png",
      name: "Ms. Emily Hernandez",
      mail: "emily@example.com",
      qual: "Diploma in Child Psychology",
      info: "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.",
    },
    {
      src: "/Images/Team4.png",
      name: "Mr. Michael Turner",
      mail: "michael@example.com",
      qual: "Bachelor's Degree in Physical Education",
      info: "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle.",
    },
    {
      src: "/Images/Team5.png",
      name: "Ms. Jessica Lee",
      mail: "jessica@example.com",
      qual: "Master's Degree in Special Education",
      info: "Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential.",
    },
    {
      src: "/Images/Team6.png",
      name: "Mr. William Parker",
      mail: "william@example.com",
      qual: "Bachelor's Degree in Fine Arts",
      info: "Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students.",
    },
  ];

  return (
    <div className="MainContainer">
      <SectionsHeader
        title="Our Teachers With Experties"
        header="Our Team Members"
        text="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators..."
        margin={true}
        location="center"
        fontSize="big"
      />

      <div className="MembersGrid">
        {members.map((member, index) => (
          <MemberCard
            key={index}
            src={member.src}
            name={member.name}
            mail={member.mail}
            qual={member.qual}
            info={member.info}
          />
        ))}
      </div>
    </div>
  );
}
