import React from "react";

import "../../styles/beer-card-elmt/BeerCardStyle.css";

import PropTypes from "prop-types";

function BeerCardDetails({ close }) {
  return (
    <div className="beerCardDetails">
      <div className="marg">
        <h2 className="title">India Session Lager - Prototype Challenge</h2>
        <div className="imgAndText">
          <div className="imgAndTagLine">
            <img
              className="img"
              src="https://static.unepetitemousse.fr/produits/bieres/brewdog/brewdog-PunkIPA-2021_1800w.jpg"
              alt=""
            />
            <h4>Refreshing Hop Fix</h4>
          </div>
          <div className="blockText">
            <div className="dateAndAlc">
              <h5 className="date">First brewed: 11/1/2015</h5>
              <h5 className="alc">Alc: 4,4%</h5>
            </div>
            <div className="brewDetails">
              <h5>
                Bitterness: o o o o o IBU 23 (International Bitterness Unit)
              </h5>
              <h5>
                Color: <div className="brewColor" /> EBC 20 (European Brewery
                Convention)
              </h5>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus rem iste repudiandae atque dolorem deserunt itaque
              vero. Quia quis illum beatae dolore distinctio mollitia eos dolor
              laboriosam tempora!
            </p>
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
};

export default BeerCardDetails;
