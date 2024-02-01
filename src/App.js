import { Route, Routes } from "react-router";
import LandingPage from "./components/homepage/LandingPage";
import "./index.css";
import ContactUs from "./components/contactpage/ContactUs";
import About from "./components/about-page/About";
import Excos from "./components/excos/Excos";
import Article from "./components/article-page/Article";

function App() {
  return (
    // <div className="bg-[#FFFFFF] text-[#1F1D21] ">
    //   <Routes>
    //     <Route path="/" element={<LandingPage />} />
    //     <Route path="/contact" element={<ContactUs />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/excos" element={<Excos />} />
    //   </Routes>
    // </div>
    <div>
      <Article />
    </div>
  );
}

export default App;
