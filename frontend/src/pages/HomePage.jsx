import React, { useState, useEffect } from "react";
import "../styles/HomePage.css";
import "../styles/HomePopUp.css";
import HomePopUp from "@components/HomePopUp";
import Header from "@components/Header";
import BeerCard from "@components/beer-card-elmt/BeerCard";
import BeerCardDetails from "@components/beer-card-elmt/BeerCardDetails";
import Footer from "@components/Footer";
import Anchor from "@components/Anchor";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import FiltersComponent from "../components/filters-comp/FiltersComponent";

function HomePage() {
  const [beerArray, setBeeArray] = useState([]);

  const location = useLocation();

  const [filteredBeer, setFilteredBeer] = useState([]);
  const [beerItem, setBeerItem] = useState();

  const navigate = useNavigate();

  let filterAgain;

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/beer`).then((res) => {
      setBeeArray(res.data);
      setFilteredBeer(res.data);
    });
  }, []);

  const openBeer = (index) => {
    const temp = { ...filteredBeer[index] };
    temp.index = index;
    setBeerItem(temp);
  };

  const [minColValue, setMinColValue] = useState(0);
  const [maxColValue, setMaxColValue] = useState(0);
  const colorInput = (e) => {
    setMinColValue(e.minValue);
    setMaxColValue(e.maxValue);
    filterAgain();
  };

  const [minAlcValue, setMinAlcValue] = useState(0);
  const [maxAlcValue, setMaxAlcValue] = useState(0);
  const alcInput = (el) => {
    setMinAlcValue(el.minValue);
    setMaxAlcValue(el.maxValue);
    filterAgain();
  };

  const [minBitterValue, setMinBitterValue] = useState(0);
  const [maxBitterValue, setMaxBitterValue] = useState(0);
  const bitterInput = (ele) => {
    setMinBitterValue(ele.minValue);
    setMaxBitterValue(ele.maxValue);
    filterAgain();
  };

  const alc = {
    min: minAlcValue,
    max: maxAlcValue,
    callback: alcInput,
  };

  const bit = {
    min: minBitterValue,
    max: maxBitterValue,
    callback: bitterInput,
  };
  const col = {
    min: minColValue,
    max: maxColValue,
    callback: colorInput,
  };

  const [favorite, setFavorite] = useState(true);
  const handleFavorite = (event) => {
    event.stopPropagation();
    setFavorite(!favorite);
  };

  filterAgain = () => {
    setFilteredBeer(
      beerArray
        .filter((ele) => {
          if (maxAlcValue >= 11) {
            if (ele.abv >= minAlcValue) return ele;
          }
          if (maxAlcValue <= 10) {
            if (ele.abv >= minAlcValue && ele.abv <= maxAlcValue) return ele;
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
        .filter((elem) => {
          if (!favorite) {
            return elem.heart;
          }
          return true;
        })
    );
  };

  const clearFilter = () => {
    if (location.pathname === "/home") {
      window.location.reload();
    }
    navigate("/home");
  };

  const handleClick = (event, id) => {
    event.stopPropagation();
    const temp = [...beerArray];
    const indice = temp.findIndex((biere) => biere.id === id);
    temp[indice].heart = !temp[indice].heart;
    setBeeArray(temp);
    if (beerItem) {
      setBeerItem({ ...beerItem, heart: !beerItem.heart });
    }
  };

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="body">
      <Header />
      <div className="main">
        <h2>Oh my brew!</h2>
        <FiltersComponent
          col={col}
          alc={alc}
          bit={bit}
          handleFavorite={handleFavorite}
          favorite={favorite}
          resetEvent={(ev) => clearFilter(ev)}
        />
        <button
          className="PopUpButton"
          onClick={() => setIsOpen(true)}
          type="button"
        >
          ?
        </button>
        <img
          className="dog"
          src="src/assets/oh-my-brew-icon-dog-ok.png"
          alt="dog"
        />
      </div>
      <div className="beerDisplay">
        <div className="beerCardList">
          {filteredBeer.map((element, i) => (
            <BeerCard
              key={element.id}
              name={element.name}
              imageUrl={`${import.meta.env.VITE_BACKEND_URL}/images/${
                element.imageUrl
              }`}
              index={i}
              id={element.id}
              ibu={element.ibu}
              firstBrewed={element.firstBrewed}
              abv={element.abv}
              srm={element.srm}
              tagline={element.tagline}
              description={element.description}
              ingredients={element.ingredients}
              foodPairing={element.foodPairing}
              clickEvent={openBeer}
              handleClick={(event) => handleClick(event, element.id)}
              heart={element.heart}
            />
          ))}
        </div>
      </div>
      {beerItem ? (
        <BeerCardDetails
          id={beerItem.id}
          name={beerItem.name}
          ibu={beerItem.ibu}
          firstBrewed={beerItem.firstBrewed}
          abv={beerItem.abv}
          srm={beerItem.srm}
          imageUrl={`http://localhost:5000/images/${beerItem.imageUrl}`}
          description={beerItem.description}
          tagline={beerItem.tagline}
          ingredients={beerItem.ingredients}
          foodPairing={beerItem.foodPairing}
          close={() => setBeerItem(null)}
          handleClick={(event) => handleClick(event, beerItem.id)}
          favorite={beerItem.favorite}
          heart={beerItem.heart}
        />
      ) : null}
      <Footer />
      {isOpen && <HomePopUp onClose={handleClose} />}
      {showButton && <Anchor onScrollToTop={scrollToTop} />}
    </div>
  );
}

export default HomePage;
