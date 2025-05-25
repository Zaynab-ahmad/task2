import "./Header.css";
import TopBar from "../TopBar/TopBar";
import NavBar from "../NavBar/NavBar";

export default function Header() {
  const logo = "Icons/Logo.svg";
  const navLinks = [
    { label: "Home", href: "" },
    { label: "About Us", href: "about" },
    { label: "Academics", href: "academics" },
    { label: "Admissions", href: "admissions" },
    { label: "Student Life", href: "student-life" },
    { label: "Contact", href: "contact" },
  ];
  return (
    <div
      className="Header NavContainer"
      style={{ position: "fixed", width: "100%", zIndex: "1000" }}
    >
      <TopBar />
      <NavBar logoSrc={logo} navLinks={navLinks} />
    </div>
  );
}
