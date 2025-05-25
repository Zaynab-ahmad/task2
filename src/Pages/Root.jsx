import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";

export default function Root() {

  return (
    <div>
      <ScrollToTop />
      <Header  />
      <Outlet  /> 
      <Footer />
    </div>
  );
}
