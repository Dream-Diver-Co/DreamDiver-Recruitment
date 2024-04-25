import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EmployApply from "./pages/apply/EmployApply";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employ" element={<EmployApply />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
