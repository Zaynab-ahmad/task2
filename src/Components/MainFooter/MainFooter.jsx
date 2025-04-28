import "./MainFooter.css";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import ContactIconBox from "../ContactIconBox/ContactIconBox";


const linksData = [
  {
    title: "Home",
    links: ["Features", "Our Testimonials", "FAQ"],
  },
  {
    title: "About Us",
    links: [
      "Our Mission",
      "Our Vision",
      "Awards and Recognitions",
      "History",
      "Teachers",
    ],
  },
  {
    title: "Academics",
    links: ["Special Features", "Gallery"],
  },
  {
    title: "Contact Us",
    links: ["Information", "Map & Direction"],
  },
];

const contactData = [
  { icon: <IoIosMail />, text: "hello@littlelearners.com" },
  { icon: <FaPhone />, text: "+123-456-7890" },
  { icon: <IoLocationSharp />, text: "123 Street Name, City" },
];

export default function MainFooter() {
  return (
    <div className="MainFooter">
      <div className="FirstColumn">
        <div className="LogoSec Flex">
          <img src="Icons/Logo.svg" alt="" className="Logo" />
          <p className="SharedFont">
            We believe in the power of play to foster creativity,
            problem-solving skills, and imagination.
          </p>
        </div>

        <div className="Contactgroup Flex">
          {contactData.map((contact, index) => (
            <div className="FlexRow ContactBoxC" key={index}>
              <ContactIconBox icon={contact.icon} />
              <p className="SharedFont">{contact.text}</p>
            </div>
          ))}
        </div>
      </div>

      {linksData.map((section, index) => (
        <div className="Column Flex" key={index}>
          <h3>{section.title}</h3>
          {section.links.map((link, linkIndex) => (
            <a href="" className="SharedFont" key={linkIndex}>
              {link}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}
