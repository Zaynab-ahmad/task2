import './App.css'
import BenefitsSec from './Components/BenefitsSec/BenefitsSec';
import FAQ from './Components/FAQ/FAQ';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import NavBar from './Components/NavBar/NavBar'
import NavigateSec from './Components/NavigateSec/NavigateSec';
import TestimonialsSec from './Components/TestimonialsSec/TestimonialsSec';
import TopBar from './Components/TopBar/TopBar'

function App() {
const logo = "Icons/Logo.png";
const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "About Us", href: "#", active: false },
  { label: "Academics", href: "#", active: false },
  { label: "Admissions", href: "#", active: false },
  { label: "Student Life", href: "#", active: false },
  { label: "Contact", href: "#", active: false,},
];
  return (
    <>
      <TopBar />
      <NavBar logoSrc={logo} navLinks={navLinks} />
      <Hero/>
      <BenefitsSec/>
      <TestimonialsSec/>
      <FAQ/>
      <NavigateSec/>
      <Footer/>
    </>
  );
}

export default App
