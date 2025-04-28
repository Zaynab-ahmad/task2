import { useState } from "react";
import "./NavBar.css";
import { HiMiniBars3BottomRight } from "react-icons/hi2";

export default function NavBar({ logoSrc, navLinks }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="NavContainer">
      <nav className="Navbar SharedBorder">
        <div className="LogoSection">
          <img src={logoSrc} alt="Logo" className="Logo" />
        </div>

        <div className={`NavLinks ${menuOpen ? "Open" : ""}`}>
          {navLinks.map((link, index) => (
            <div
              key={index}
              className={`NavItem ${link.active ? "Active" : ""}`}
            >
              <a href={link.href} className="SharedFont">
                {link.label}
              </a>
            </div>
          ))}
        </div>

        <div className="BarsIcon" onClick={handleMenuToggle}>
          <HiMiniBars3BottomRight size={28} />
        </div>
      </nav>
    </div>
  );
}
