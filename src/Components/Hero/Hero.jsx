import "./Hero.css";
import HeroContent from "./HeroContent/HeroContent";
import HeroImage from "./HeroImage/HeroImage";
export default function Hero() {
  const numbersInfo = [
    { num: "7000", text: "Students Passed Out" },
    { num: "37", text: "Awards & Recognitions" },
    { num: "15", text: "Experienced Educators" },
  ];
  return (
    <div className="MainContainer">
      <div className="Hero">
        <HeroImage
          mainImage="Images/HeroImg.png"
          coverImage="Icons/bubbles.png"
        />
        <HeroContent
          smallHeading="Welcome to Little Learners Academy"
          mainHeading="Where Young Minds Blossom and"
          highlightedText="Dreams Take Flight."
          paragraph="Our kindergarten school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
          numbersData={numbersInfo}
        />{" "}
      </div>
    </div>
  );
}
