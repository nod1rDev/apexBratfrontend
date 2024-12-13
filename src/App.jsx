import React, { useEffect, useState } from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import Loading from "./Landing/Loading";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import About from "./Landing/About";
import Hamkorlar from "./Landing/Hamkorlar";
import Workers from "./Landing/Workers";
import Vocansiya from "./Landing/Vocansiya";
import Support from "./Landing/Support";
import Footer from "./Components/Footer";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 3900);
    }
  }, [loading]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Provider store={store}>
          <div>
            <div
              id="half1"
              className="bg-[#1f1f1f] text-[#f9f4e8] flex flex-col"
            >
              <div className="mx-auto max-w-[90%]">
                <div className="w-[180px] mx-auto">
                  <Header />
                </div>
                <HeroSection />
              </div>
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
            <div
              id="half2"
              className="bg-[#f9f4e8] text-[#1f1f1f] flex flex-col"
            >
              <Element name="vocansiya">
                <Vocansiya />
              </Element>
              <Element name="support">
                <Support />
              </Element>
            </div>
            <Footer />
          </div>
        </Provider>
      )}
    </div>
  );
}

export default App;
