import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import { HiMiniBars3BottomRight } from "react-icons/hi2";

export default function NavBar({ logoSrc, navLinks }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);


  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="Navbar SharedBorder" ref={navRef}>
      <div className="LogoSection">
        <img src={logoSrc} alt="Logo" className="Logo" />
      </div>

      <ul className={`NavLinks ${menuOpen ? "Open" : ""}`}>
        {navLinks.map((link, index) => {
          const isActive = location.pathname === link.href;
          return (
            <li
              key={index}
              className={`NavItems ${isActive ? "Active" : ""}`}
              onClick={() => setMenuOpen(false)} 
            >
              <Link to={link.href} className="SharedFont">
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="BarsIcon" onClick={handleMenuToggle}>
        <HiMiniBars3BottomRight size={28} />
      </div>
    </nav>
  );
} 