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

  const [minColValue, setMinColValue] = useState(5);
  const [maxColValue, setMaxColValue] = useState(20);
  const colorInput = (e) => {
    setMinColValue(e.minValue);
    setMaxColValue(e.maxValue);
  };

  const [minAlcValue, setMinAlcValue] = useState(2);
  const [maxAlcValue, setMaxAlcValue] = useState(5);
  const alcInput = (el) => {
    setMinAlcValue(el.minValue);
    setMaxAlcValue(el.maxValue);
  };

  return (
    <div>
      <section className="header">header</section>
      <div className="main">
        <h2>Oh my brew!</h2>
        <h3>Let the dogs out!</h3>
        <FiltersComponent colorInput={colorInput} alcInput={alcInput} />
        <img src="src/assets/oh-my-brew-icon-dog-ok.png" alt="dog" />
      </div>
      <div className="beerDisplay">
        <div className="beerCardList">
          {beerArray
            .filter((ele) => {
              if (maxAlcValue >= 11) {
                return ele.abv >= minAlcValue;
              } else if (maxAlcValue <= 10) {
                return ele.abv >= minAlcValue && ele.abv <= maxAlcValue;
              }
            })
            .filter((el) => {
              if (maxColValue >= 45) {
                return el.srm >= minColValue;
              } else if (maxColValue <= 40) {
                return el.srm >= minColValue && el.srm <= maxColValue;
              }
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
