import React from "react";

import "../../styles/beer-card-elmt/BeerCardStyle.css";

import PropTypes from "prop-types";

function BeerCardDetails({
  name,
  imageUrl,
  ibu,
  firstBrewed,
  abv,
  srm,
  description,
  close,
}) {
  return (
    <div className="beerCardDetails">
      <div className="marg">
        <h2 className="title">{name}</h2>
        <div className="imgAndText">
          <div className="imgAndTagLine">
            <img className="img" src={imageUrl} alt="" />
            <h4>tagline</h4>
          </div>
          <div className="blockText">
            <div className="dateAndAlc">
              <h5 className="date">First brewed: {firstBrewed}</h5>
              <h5 className="alc">Alc: {abv}</h5>
            </div>
            <div className="brewDetails">
              <h5>
                Bitterness: o o o o o IBU {ibu} (International Bitterness Unit)
              </h5>
              <h5>
                Color: <div className="brewColor" /> SRM {srm}
              </h5>
            </div>
            <p>{description}</p>
            <button className="btn" type="button">
              Add to Favorite{" "}
            </button>
          </div>
        </div>
        <div className="buttonsFlecheCroix">
          <button onClick={close} className="btnCroix" type="button">
            X
          </button>
          <button className="btnFleche" type="button">
            --{">"}
          </button>
        </div>
      </div>
    </div>
  );
}

BeerCardDetails.propTypes = {
  close: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  ibu: PropTypes.number.isRequired,
  firstBrewed: PropTypes.string.isRequired,
  abv: PropTypes.number.isRequired,
  srm: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default BeerCardDetails;
