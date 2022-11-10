import React, { useState, useEffect } from "react";
import "../styles/HomePage.css";
import "../styles/HomePopUp.css";

import Header from "@components/Header";
import BeerCard from "@components/beer-card-elmt/BeerCard";
import HomePopUp from "@components/HomePopUp";
import FiltersComponent from "../components/filters-comp/FiltersComponent";
import Footer from "@components/Footer";
import axios from "axios";

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

  const [minBitterValue, setMinBitterValue] = useState(10);
  const [maxBitterValue, setMaxBitterValue] = useState(50);
  const bitterInput = (ele) => {
    setMinBitterValue(ele.minValue);
    setMaxBitterValue(ele.maxValue);
  };

  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div id="body">
      <Header />
      <div className="main">
        <h2>Oh my brew!</h2>
        <h3 className="taglineWebsite">Let the dogs out!</h3>
        <FiltersComponent
          colorInput={colorInput}
          alcInput={alcInput}
          bitterInput={bitterInput}
        />
        <button className="PopUpButton" onClick={() => setIsOpen(true)}>?</button>
        <img src="src/assets/oh-my-brew-icon-dog-ok.png" alt="dog" />
      </div>
      <div className="beerDisplay">
        <div className="beerCardList">
          {beerArray
            .filter((ele) => {
              if (maxAlcValue >= 11) {
                if (ele.abv >= minAlcValue) return ele;
              }
              if (maxAlcValue <= 10) {
                if (ele.abv >= minAlcValue && ele.abv <= maxAlcValue)
                  return ele;
              }
              return null;
            })
            .filter((el) => {
              if (maxColValue >= 45) {
                if (el.srm > minColValue) return el;
              }
              if (maxColValue <= 40) {
                if (el.srm >= minColValue && el.srm <= maxColValue) return el;
              }
              return null;
            })
            .filter((ele) => {
              if (maxBitterValue >= 110) {
                if (ele.ibu > minBitterValue) return ele;
              }
              if (maxBitterValue <= 100) {
                if (ele.ibu >= minBitterValue && ele.ibu <= maxBitterValue)
                  return ele;
              }
              return null;
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
      </div>
      <Footer />
      {isOpen && <HomePopUp onClose={handleClose} />}
    </div >
  );
}

export default HomePage;
