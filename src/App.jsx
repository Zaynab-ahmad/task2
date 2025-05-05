import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";

import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Academics from "./Pages/Academics/Academics";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/academics" element={<Academics/>} />
        <Route path="/admissions" element={<div>Admissions</div>} />
        <Route path="/student-life" element={<div>Student Life</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
