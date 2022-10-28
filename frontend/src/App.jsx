import HomePage from "./pages/HomePage";

import "./App.css";
import BeerCard from "./components/beer-card-elmt/BeerCard";

function App() {
  return (
    <div className="App">
      <HomePage />
      <p>coucou</p>

      <BeerCard />
    </div>
  );
}

export default App;
