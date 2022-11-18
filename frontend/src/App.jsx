import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "@pages/HomePage";
import AgeGate from "./pages/AgeGate";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AgeGate />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
