import React, { useState } from "react";

import "../../styles/beer-card-elmt/BeerCardStyle.css";

import PropTypes from "prop-types";

function BeerCardDetails({ close }) {
  const [back, setBack] = useState(true);

  const handleBack = () => {
    setBack(!back);
  };

  /* return (
    <div>
      {back ? (
        <div className="beerCardDetails">
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
                  <span>Bitterness:</span> o o o o o IBU 23 (International Bitterness Unit)
                  </p>
                  <p>
                  <span>Color:</span> <div className="brewColor" /> EBC 20 (European
                    Brewery Convention)
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
              <button onClick={handleBack} className="btnFleche" type="button">
                --{">"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="card-is-flipped">
          <div className="recipe">
              <div className="imageRecipe">
              <img src="src/assets/oh-my-brew-icon-ingredients.png" alt="ingredients" />              </div>
              <div className="ingredients">
                Ingredients
                <button className="btn" type="button">
             Download the recipe{" "}
           </button>
              </div>
          </div>
          <div className="foodPairing">
          <button className="btn" type="button">
             Add to Favorite{" "}
           </button>
           </div>
          <div className="buttonsFlecheCroix">
            <button onClick={close} className="btnCroix" type="button">
              X
            </button>
            <button onClick={handleBack} className="btnFleche" type="button">
              {"<"}--
            </button>
          </div>
        </div>
      )}
    </div>
  );
} */ /// /////////////////////////////////////////////////////////////////////////////////

  return (
    <div>
      {back ? (
        <div className="beerCardDetails">
          <div className="buttonCroix">
            <button onClick={close} className="btnCroix" type="button">
              X
            </button>
          </div>
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
                    <span>Color:</span> <div className="brewColor" /> EBC 20
                    (European Brewery Convention)
                  </p>
                </div>
                <p id="paragraphe">
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
            <div className="buttonCroix">
              <button onClick={handleBack} className="btnFleche" type="button">
                --{">"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="card-is-flipped">
          <div className="flippedContent">
            <div className="buttonCroix">
              <button onClick={close} className="btnCroix" type="button">
                X
              </button>
            </div>
            <div className="flippedContainers">
              <div className="recipe">
                <div className="imageRecipe">
                  <img
                    src="src/assets/oh-my-brew-icon-ingredients.png"
                    alt="ingredients"
                  />
                </div>
                <div className="ingredients">
                  <div>
                    Ingredients
                    <div>Malt:</div>
                    <div>Hops:</div>
                    <div>Yeast:</div>
                  </div>
                </div>
                <div className="ingredientsBTN">
                  <button className="btn" type="button">
                    Download the recipe{" "}
                  </button>
                </div>
              </div>
              <div className="foodPairing">
                <div className="foodPairingIMG">
                  <img
                    src="src/assets/oh-my-brew-icon-food-pairing.png"
                    alt="ingredients"
                  />
                </div>
                <div className="dishes">
                  Food pairing
                  <div>Dish 1:</div>
                  <div>Dish 2:</div>
                  <div>Dish 3:</div>
                </div>
                <div className="foodPairingBTN">
                  <button className="btn" type="button">
                    Add to Favorite{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="buttonsFleche">
              <button onClick={handleBack} className="btnFleche" type="button">
                {"<"}--
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

BeerCardDetails.propTypes = {
  close: PropTypes.func.isRequired,
};

export default BeerCardDetails;
