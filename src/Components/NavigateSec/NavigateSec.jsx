import "./NavigateSec.css";
import SectionsHeader from "../SectionsHeader/SectionsHeader";
import NavigateContainer from "../NavigateContainer/NavigateContainer";

export default function NavigateSec() {
  return (
    <div className="NavigateSec MainContainer">
      <SectionsHeader
        title="Explore More"
        header="Navigate through our Pages"
        text="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
        margin={true}
        location="center"
        fontSize="big"
      />
      <NavigateContainer />
    </div>
  );
}
