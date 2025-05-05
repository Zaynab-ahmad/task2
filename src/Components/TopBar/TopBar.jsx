import { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import "./TopBar.css";

export default function TopBar() {
  const [icon1Src, setIcon1Src] = useState("Icons/AbstractDesign.png");
  const [icon4Src, setIcon4Src] = useState("Icons/AbstractDesign4.png");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 576) {
        setIcon1Src("Icons/AbstractDesign5.png");
        setIcon4Src("Icons/AbstractDesign6.png");
      } else if (window.innerWidth <= 1440) {
        setIcon1Src("Icons/AbstractDesign7.png");
        setIcon4Src("Icons/AbstractDesign8.png");
      } else {
        setIcon1Src("Icons/AbstractDesign.png");
        setIcon4Src("Icons/AbstractDesign4.png");
      }
    }

    function handleScroll() {
      setHidden(window.scrollY > 50);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (

      <div className="TopBar SharedBorder" style={{
        display: hidden ? "none" : "block"}}>
        <img src={icon1Src} className="TopBarIcon1" alt="Icon1" />
        <img
          src="Icons/AbstractDesign2.svg"
          className="TopBarIcon2"
          alt="Icon2"
        />

        <div className="TopBarMid">
          <div className="TopBarTxt SharedFont">
            <p>Admission is Open, Grab your seat now</p>
            <GoArrowRight className="ArrowIcon" />
          </div>
        </div>

        <img
          src="Icons/AbstractDesign3.svg"
          className="TopBarIcon3"
          alt="Icon3"
        />
        <img src={icon4Src} className="TopBarIcon4" alt="Icon4" />
      </div>
  
  );
}
