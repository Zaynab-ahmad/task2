import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import TopBar from "./Components/TopBar/TopBar";
import Home from "./Pages/Home/Home";

function App() {
  const logo = "Icons/Logo.svg";
  const navLinks = [
    { label: "Home", href: "#", active: true },
    { label: "About Us", href: "#", active: false },
    { label: "Academics", href: "#", active: false },
    { label: "Admissions", href: "#", active: false },
    { label: "Student Life", href: "#", active: false },
    { label: "Contact", href: "#", active: false },
  ];
  return (
    <>
      <TopBar />
      <NavBar logoSrc={logo} navLinks={navLinks} />
          <Routes>
  <Route path="/" element={<Home />}/>
      
          </Routes>
      <Footer />
    </>
  );
}

export default App;
