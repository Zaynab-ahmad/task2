import { Outlet, useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";

export default function Root() {
  const location = useLocation();

  return (
    <div>
      <ScrollToTop />
      <Header key={location.pathname} />
      <Outlet key={location.pathname} /> 
      <Footer />
    </div>
  );
}
