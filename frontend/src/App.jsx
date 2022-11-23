import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "@pages/HomePage";
import AgeGate from "./pages/AgeGate";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AgeGate />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
