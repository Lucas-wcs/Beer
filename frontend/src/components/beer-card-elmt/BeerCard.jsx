import React, { useState } from "react";

import "../../styles/beer-card-elmt/BeerCard.css";
import "../../styles/beer-card-elmt/HeartButton.css";
import PropTypes from "prop-types";
import BeerCardDetails from "./BeerCardDetails";
import HeartButton from "./HeartButton";

function BeerCard({ name, imageUrl, ibu, firstBrewed, abv, srm, description }) {
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
        <div className="cardContainer">
          <HeartButton />
          <div>
            <img className="imgIcon" src={imageUrl} alt="" />
            <h4>{name}</h4>
          </div>
        </div>
      </div>
      {click === true ? (
        <BeerCardDetails
          ibu={ibu}
          firstBrewed={firstBrewed}
          abv={abv}
          srm={srm}
          imageUrl={imageUrl}
          description={description}
          close={close}
        />
      ) : null}
    </>
  );
}

BeerCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  ibu: PropTypes.number.isRequired,
  firstBrewed: PropTypes.string.isRequired,
  abv: PropTypes.number.isRequired,
  srm: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default BeerCard;
