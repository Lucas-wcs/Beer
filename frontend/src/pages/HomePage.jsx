import React, { useState, useEffect } from "react";
import "../styles/HomePage.css";
import BeerCard from "@components/beer-card-elmt/BeerCard";
import axios from "axios";
import FiltersComponent from "../components/filters-comp/FiltersComponent";

function HomePage() {
  const [beerArray, setBeeArray] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/beer").then((res) => {
      setBeeArray(res.data);
    });
  }, []);

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(40);
  const handleInput = (e) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  };
  return (
    <div>
      <section className="header">header</section>
      <div className="main">
        <h2>Oh my brew!</h2>
        <h3>Let the dogs out!</h3>
        <FiltersComponent handleInput={handleInput} />
        <img src="src/assets/oh-my-brew-icon-dog-ok.png" alt="dog" />
      </div>
      <div className="beerDisplay">
        <div className="beerCardList">
          {beerArray
            .filter((el) => {
              return el.srm >= minValue && el.srm <= maxValue;
            })
            .map((element) => (
              <BeerCard
                key={element.id}
                name={element.name}
                imageUrl={`http://localhost:5000/images/${element.imageUrl}`}
                ibu={element.ibu}
                firstBrewed={element.firstBrewed}
                abv={element.abv}
                srm={element.srm}
                description={element.description}
              />
            ))}
        </div>
        <div id="illustration">
          <img src="src/assets/oh-my-brew-icon-dog-not-ok.png" alt="dog" />
        </div>
      </div>
      <section className="footer">footer</section>
    </div>
  );
}

export default HomePage;
