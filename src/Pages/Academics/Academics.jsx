import BenefitsSec from "../../Components/BenefitsSec/BenefitsSec";
import FeaturesSec from "../../Components/FeaturesSec/FeaturesSec";
import GallerySec from "../../Components/GallerySec/GallerySec";
import HeroAbout from "../../Components/HeroAbout/HeroAbout";

export default function Academics() {
     const data = [
       {
         icon: <img src="Icons/book.svg" alt="book" />,
         title: "Thematic Learning",
         text: "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.",
       },
       {
         icon: <img src="Icons/data.svg" alt="book" />,
         title: "STEAM Education",
         text: "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.",
       },
       {
         icon: <img src="Icons/puzzle.svg" alt="book" />,
         title: "Language Immersion",
         text: "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.",
       },
       {
         icon: <img src="Icons/pen.svg" alt="book" />,
         title: "Art and Creativity",
         text: "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.",
       },
       {
         icon: <img src="Icons/sun.svg" alt="book" />,
         title: "Outdoor Education",
         text: "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.",
       },
       {
         icon: <img src="Icons/star.svg" alt="book" />,
         title: "Play-Based Learning",
         text: "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.",
       },
     ];
  return (
    <div>
      <HeroAbout
        title="Academics"
        header="Nurturing Young Minds for Success"
        content="Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."
      />
      <BenefitsSec
        title="Our Features"
        header="Our Special Features"
        text="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
        data={data}
      />
      <FeaturesSec/>
      <GallerySec/>
    </div>
  );
}
