import FAQBox from "../FAQ/FAQBox/FAQBox";
import "./FAQQuestionSec.css";

export default function FAQQuestionSec() {
  const data = [
    {
      Q: "What are the school hours at Little Learners Academy?",
      A: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      Q: "Is there a uniform policy for students?",
      A: "Yes, we have a uniform policy to promote a sense of community and equality. Uniforms consist of navy blue or white polo shirts and khaki or navy pants/skirts. Details are provided upon enrollment.",
    },
    {
      Q: "What extracurricular activities are available for students?",
      A: "We offer a variety of extracurricular activities including art, music, sports, and STEM clubs. These programs run after school and are designed to enhance students’ skills and interests.",
    },
    {
      Q: "What extracurricular activities are available for students?", // Note: Duplicate question, consider revising
      A: "Our extracurricular programs include dance, chess, coding, and drama, among others, to provide diverse opportunities for student growth.",
    },
    {
      Q: "How do you handle food allergies and dietary restrictions?",
      A: "We maintain a strict allergen-aware policy. Parents provide dietary details during enrollment, and our staff ensures meals and snacks are safe and compliant with individual needs.",
    },
    {
      Q: "What is the teacher-to-student ratio at Little Learners Academy?",
      A: "Our teacher-to-student ratio is 1:8 for preschool and 1:12 for elementary classes, ensuring personalized attention for each student.",
    },
    {
      Q: "How do you handle discipline and behavior management?",
      A: "We use positive reinforcement and restorative practices to manage behavior, fostering a respectful and supportive environment while addressing issues constructively.",
    },
    {
      Q: "How do I apply for admission to Little Learners Academy?",
      A: "Applications are submitted online via our website. The process includes a form, a parent interview, and a student assessment. Visit our admissions page for details.",
    },
  ];

  return (
    <div className="FAQContainer">
      <div className="FAQColumn">
        {data.slice(0, 4).map((item, index) => (
          <FAQBox key={index} qus={item.Q} ans={item.A} />
        ))}
      </div>
      <div className="FAQColumn">
        {data.slice(4, 8).map((item, index) => (
          <FAQBox key={index} qus={item.Q} ans={item.A} />
        ))}
      </div>
    </div>
  );
}
