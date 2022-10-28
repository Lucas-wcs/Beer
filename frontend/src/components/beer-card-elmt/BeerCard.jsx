import React, { useState } from "react";

import "../../styles/beer-card-elmt/BeerCard.css";
import BeerCardDetails from "./BeerCardDetails";

function BeerCard() {
  const [click, setClick] = useState(false);

  const close = () => setClick(false);

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      setClick(!click);
    }
  };

  return (
    <>
      <div
        className="beerCardSmall"
        onClick={() => setClick(!click)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
      >
        <img
          className="imgIcon"
          src="https://static.unepetitemousse.fr/produits/bieres/brewdog/brewdog-PunkIPA-2021_1800w.jpg"
          alt=""
        />
        <h4>
          India Session Lager - <br /> Prototype Challenge
        </h4>
      </div>
      {click === true ? <BeerCardDetails close={close} /> : null}
    </>
  );
}

export default BeerCard;
