import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import { HiMiniBars3BottomRight } from "react-icons/hi2";

export default function NavBar({ logoSrc, navLinks }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
      <nav className="Navbar SharedBorder">
        <div className="LogoSection">
          <img src={logoSrc} alt="Logo" className="Logo" />
        </div>

        <div className={`NavLinks ${menuOpen ? "Open" : ""}`}>
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.href;
            return (
              <div
                key={index}
                className={`NavItems ${isActive ? "Active" : ""}`}
              >
                <Link to={link.href} className="SharedFont">
                  {link.label}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="BarsIcon" onClick={handleMenuToggle}>
          <HiMiniBars3BottomRight size={28} />
        </div>
      </nav>
  );
}
