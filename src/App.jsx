import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";

// Sahifalar va komponentlar
import MainPage from "./pages/MainProvider";
import NotFound from "./pages/NotFound";
import ServicesDetail from "./pages/services";
import Loading from "./Landing/Loading";

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
    <>
      {loading ? (
        <Loading />
      ) : (
        <Provider store={store}>
          <Router>
            <Routes>
              <Route path="/" element={<MainPage />}></Route>

              <Route path="*" element={<NotFound />} />
              <Route path="/service/:id" element={<ServicesDetail />} />
            </Routes>
          </Router>
        </Provider>
      )}
    </>
  );
}

export default App;
