import { Route, Routes, Outlet } from "react-router";
import "./index.css";
import ContactUs from "./components/contactpage/ContactUs";
import About from "./components/about-page/About";
import Excos from "./components/excos/Excos";
import Articles from "./components/article-page/Article";
import Events from "./components/events-page/AllEvents";
import Donate from "./components/donate/Donate";
import InfoCollection from "./components/info-collection/InfoCollection";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
    // <div className="bg-[#FFFFFF] text-[#1F1D21] ">
    //   <Routes>
    //     <Route path="/" element={<LandingPage />} />
    //     <Route path="/contact" element={<ContactUs />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/excos" element={<Excos />} />
    //     <Route path="/articles" element={<Articles />} />
    //     <Route path="/donate" element={<Donate />} />
    //     <Route path="/join" element={<InfoCollection />} />
    //     <Route path="/events" element={<Events />} />
    //   </Routes>
    // </div>
  );
}

export default App;
