import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EmployApply from "./pages/apply/EmployApply";
import BuyerApply from "./pages/apply/BuyerApply";
import SignUP from "./pages/SignUP";
import SignInPage from "./pages/SignIn";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

function App() {
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loader">
          <BeatLoader
            color="#00bf58"
            loading={loading}
            className="loading-custom"
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/employ" element={<EmployApply />} />
              <Route path="/buyer" element={<BuyerApply />} />
              <Route path="/signup" element={<SignUP />} />
              <Route path="/signin" element={<SignInPage />} />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;
