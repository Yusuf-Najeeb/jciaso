import { useRef } from "react";
import Nav from "./Header";
import Hero from "./Hero";
import CountDown from "./CountDown";
import About from "./About";
import Speakers from "./Speakers";
import Register from "./Registration";
// import Loading from "./Loading";
import FAQs from "./FAQs";
import Partners from "../homepage/sponsors/Sponsors";
import Footer from "./Footer";

const Index = () => {
  const aboutRef = useRef(null);
  const speakerRef = useRef(null);
  const faqRef = useRef(null);
  const partnerRef = useRef(null);

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
      />
      <Hero />
      <CountDown />
      <About sectionRef={aboutRef} />
      <Speakers sectionRef={speakerRef} />
      <Register />
      {/* <Loading /> */}
      <FAQs sectionRef={faqRef} />
      <Partners sectionRef={partnerRef} />
      <Footer
        aboutRef={() => scrollToSection(aboutRef)}
        partnerRef={() => scrollToSection(partnerRef)}
        faqRef={() => scrollToSection(faqRef)}
        speakersRef={() => scrollToSection(speakerRef)}
      />
    </div>
  );
};

export default Index;
