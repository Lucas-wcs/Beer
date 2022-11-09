import React, { useState } from "react";
import "../../styles/beer-card-elmt/BeerCardStyle.css";

import PropTypes from "prop-types";

function BeerCardDetails({ close }) {
  const [back, setBack] = useState(false);

  const handleBack = () => {
    setBack(!back);
  };

  return (
    <div className="flipcard">
      {!back ? (
        <div className="beerCardDetailsFront">
          <div className="marg">
            <h3 className="title">India Session Lager - Prototype Challenge</h3>
            <div className="imgAndText">
              <div className="imgAndTagLine">
                <img
                  className="img"
                  src="https://static.unepetitemousse.fr/produits/bieres/brewdog/brewdog-PunkIPA-2021_1800w.jpg"
                  alt=""
                />
                <h4 className="taglineBeer">Refreshing Hop Fix</h4>
              </div>
              <div className="blockText">
                <div className="dateAndAlc">
                  <p className="date">First brewed: 11/1/2015</p>
                  <p className="alc">Alc: 4,4%</p>
                </div>
                <div className="brewDetails">
                  <p>
                    <span>Bitterness:</span> o o o o o IBU 23 (International
                    Bitterness Unit)
                  </p>
                  <p>
                    <span>Color:</span>
                    <div className="brewColor" /> EBC 20 (European Brewery
                    Convention)
                  </p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Necessitatibus rem iste repudiandae atque dolorem deserunt
                  itaque vero. Quia quis illum beatae dolore distinctio mollitia
                  eos dolor laboriosam tempora!
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
              <button type="button" onClick={handleBack}>
                --{">"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="card-is-flipped">
            <div className="marg">
              <h3 className="title">
                India Session Lager - Prototype Challenge
              </h3>
              <div className="imgAndText">
                <div className="imgAndTagLine">
                  <img
                    className="img"
                    src="https://static.unepetitemousse.fr/produits/bieres/brewdog/brewdog-PunkIPA-2021_1800w.jpg"
                    alt=""
                  />
                  <h4 className="taglineBeer">Refreshing Hop Fix</h4>
                </div>
                <div className="blockText">
                  <div className="dateAndAlc">
                    <p className="date">First brewed: 11/1/2015</p>
                    <p className="alc">Alc: 4,4%</p>
                  </div>
                  <div className="brewDetails">
                    <p>
                      <span>Bitterness:</span> o o o o o IBU 23 (International
                      Bitterness Unit)
                    </p>
                    <p>
                      <span>Color:</span>
                      <div className="brewColor" /> EBC 20 (European Brewery
                      Convention)
                    </p>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Necessitatibus rem iste repudiandae atque dolorem deserunt
                    itaque vero. Quia quis illum beatae dolore distinctio
                    mollitia eos dolor laboriosam tempora!
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
                <button type="button" onClick={handleBack}>
                  --{">"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div> // flipcard
  );
}

BeerCardDetails.propTypes = {
  close: PropTypes.func.isRequired,
};

export default BeerCardDetails;
