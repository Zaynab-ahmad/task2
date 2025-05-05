import "./FAQ.css";
import SectionsHeader from "../SectionsHeader/SectionsHeader";
import FAQQuestionSec from "../FAQQuestionSec/FAQQuestionSec";

export default function FAQ() {
  return (
    <div className="MainContainer">
      <SectionsHeader
        title="Solutions For The Doubts"
        header="Frequently Asked Questions"
        text="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
        margin={true}
        location="center"
        fontSize="big"
      />
      <FAQQuestionSec />
    </div>
  );
}
