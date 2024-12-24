import { useEffect, useState, useMemo, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";

// Lazy load components
const MainPage = lazy(() => import("./pages/MainProvider"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ServicesDetail = lazy(() => import("./pages/services"));
import Loading from "./Landing/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3900);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  useEffect(() => {
    if (!loading) {
      speakText("Welcome to ApexBart Solution Company");
    }
  }, [loading]);

  const speakText = (text) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      const voices = window.speechSynthesis.getVoices();
      const femaleVoice = voices.find(
        (voice) =>
          voice.name.includes("Female") ||
          voice.name.includes("Google US English")
      );
      if (femaleVoice) {
        utterance.voice = femaleVoice;
      }
      utterance.lang = "en-US"; // Set language
      window.speechSynthesis.speak(utterance);
    } else {
      console.warn("Speech Synthesis not supported in this browser.");
    }
  };

  const routes = useMemo(
    () => (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/service/:id" element={<ServicesDetail />} />
      </Routes>
    ),
    []
  );

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Provider store={store}>
          <Router>
            <Suspense
              fallback={<div className="h-screen w-screen bg-[#1f1f1f]"></div>}
            >
              {routes}
            </Suspense>
          </Router>
        </Provider>
      )}
    </>
  );
}

export default App;