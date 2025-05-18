import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Register from "./components/Register";
import ThreeDModel from "./components/ThreeDModel";
import Team from "./components/Team";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

const Home = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <ThreeDModel />
        <Roadmap />
        <Team />
        <Contact />
        <Footer />
        <Register/>
      </div>
      <ButtonGradient />
      <ScrollToTopButton />
    </>
  );
};

const App = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/0cod26pfb62euct6ob89ysu1c5j2u5jf.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Optional: cleanup script if component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
