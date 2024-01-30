import { Route, Routes } from "react-router";
import LandingPage from "./components/homepage/LandingPage";
import "./index.css";
import ContactUs from "./components/contactpage/ContactUs";

function App() {
  return (
    <div className="bg-[#FFFFFF] text-[#1F1D21] ">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
