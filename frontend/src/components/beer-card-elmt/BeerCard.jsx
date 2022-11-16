import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/beer-card-elmt/BeerCard.css";
import "../../styles/beer-card-elmt/HeartButton.css";
import HeartButton from "./HeartButton";
import "../../styles/beer-card-elmt/BeerCardStyle.css";

function BeerCard({ index, name, imageUrl, clickEvent }) {
  const [click, setClick] = useState(false);

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      setClick(!click);
    }
  };
  const [heart, setHeart] = useState(true);
  const handleClick = (event) => {
    event.stopPropagation();
    setHeart(!heart);
  };

  return (
    <div
      className="beerCardSmall"
      onClick={() => clickEvent(index)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
    >
      <div className="cardContainer">
        <HeartButton handleClick={handleClick} heart={heart} />
        <div>
          <img className="imgIcon" src={imageUrl} alt="" />
          <h4>{name}</h4>
        </div>
      </div>
    </div>
  );
}

BeerCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  clickEvent: PropTypes.string.isRequired,
};

export default BeerCard;
