import { useEffect, useState } from "react";
import SectionsHeader from "../SectionsHeader/SectionsHeader";
import "./HeroAbout.css";

export default function HeroAbout({ title, header, content }) {
  const [location, setlocation] = useState("left");
  useEffect(() => {
    const updateLocation = () => {
      const width = window.innerWidth;
      if (width <= 992) setlocation("center");
      else setlocation("left");
    };
    updateLocation();
    window.addEventListener("resize", updateLocation);
    return () => window.removeEventListener("resize", updateLocation);
  }, [location]);
  return (
    <div className="HeroAbout NavContainer ">
      <div className="AboutHeroBox SharedBorder SharedShadow">
        <img
          src="Icons/AboutHeroIcon.svg"
          alt="About Hero Icon"
          className="AboutHeroIcon"
        />
        <div className="HeroAboutContent">
          <div className="AboutHeroTitle">
            <SectionsHeader
              title={title}
              header={header}
              margin={false}
              location={location}
              fontSize="small"
            />
          </div>
          <p className="SharedFont">{content}</p>
        </div>
      </div>
    </div>
  );
}
