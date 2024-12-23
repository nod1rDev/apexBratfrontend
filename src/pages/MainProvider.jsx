import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import About from "../Landing/About";
import Hamkorlar from "../Landing/Hamkorlar";
import Workers from "../Landing/Workers";
import Vocansiya from "../Landing/Vocansiya";
import Support from "../Landing/Support";
import Footer from "../Components/Footer";
import { Element } from "react-scroll";

function MainPage() {
  return (
    <>
      <div>
        <div id="half1" className="bg-[#1f1f1f] text-[#f9f4e8] flex flex-col">
          <div className="w-[180px] max-w-[98%] mx-auto">
            <Header />
          </div>
          <HeroSection />

          <Element name="about">
            <About />
          </Element>
          <Element name="hamkorlar">
            <Hamkorlar />
          </Element>
          <Element name="workers">
            <Workers />
          </Element>
        </div>
        <div id="half2" className="bg-[#f9f4e8] text-[#1f1f1f] flex flex-col">
          <Element name="vocansiya">
            <Vocansiya />
          </Element>
          <Element name="support">
            <Support />
          </Element>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
