import { useRef } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "./Header";
import Hero from "./Hero";
import CountDown from "./CountDown";
import About from "./About";
import Speakers from "./Speakers";
import Register from "./Registration";
import FAQs from "./FAQs";
import Partners from "./Partners";
import Footer from "./Footer";

const Index = () => {
  const aboutRef = useRef(null);
  const speakerRef = useRef(null);
  const faqRef = useRef(null);
  const partnerRef = useRef(null);
  const registerRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Nav
        aboutRef={() => scrollToSection(aboutRef)}
        partnerRef={() => scrollToSection(partnerRef)}
        faqRef={() => scrollToSection(faqRef)}
        speakersRef={() => scrollToSection(speakerRef)}
        registerRef={() => scrollToSection(registerRef)}
      />
      <Hero registerRef={() => scrollToSection(registerRef)} />
      <CountDown />
      <About sectionRef={aboutRef} />
      <Speakers sectionRef={speakerRef} />
      <Register sectionRef={registerRef} />
      <FAQs sectionRef={faqRef} />
      <Partners sectionRef={partnerRef} />
      <Footer
        aboutRef={() => scrollToSection(aboutRef)}
        partnerRef={() => scrollToSection(partnerRef)}
        faqRef={() => scrollToSection(faqRef)}
        speakersRef={() => scrollToSection(speakerRef)}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Index;
