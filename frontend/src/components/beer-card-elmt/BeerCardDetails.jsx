import React, { useState } from "react";
/* import "../../styles/beer-card-elmt/BeerCardStyle.css"; */

import PropTypes from "prop-types";

function BeerCardDetails({
  name,
  imageUrl,
  ibu,
  firstBrewed,
  abv,
  srm,
  description,
  tagline,
  close,
}) {
  const [back, setBack] = useState(true);

  const handleBack = () => {
    setBack(!back);
  };

  return (
    <div>
      {back ? (
        <div className="beerCardDetails">
          <div className="buttonCroix">
            <button onClick={close} className="btnCroix" type="button">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L4.58579 6L0.292894 10.2929C-0.0976309 10.6834 -0.0976309 11.3166 0.292894 11.7071C0.683418 12.0976 1.31658 12.0976 1.70711 11.7071L6 7.41421L10.2929 11.7071C10.6834 12.0976 11.3166 12.0976 11.7071 11.7071C12.0976 11.3166 12.0976 10.6834 11.7071 10.2929L7.41421 6L11.7071 1.70711C12.0976 1.31658 12.0976 0.683418 11.7071 0.292893C11.3166 -0.0976311 10.6834 -0.0976311 10.2929 0.292893L6 4.58579L1.70711 0.292893Z"
                  fill="#592C1C"
                />
              </svg>
            </button>
          </div>
          <div className="marg">
            <h3 className="title">{name}</h3>
            <div className="imgAndText">
              <div className="imgAndTagLine">
                <img className="img" src={imageUrl} alt="" />
                <h4 className="taglineBeer">{tagline}</h4>
              </div>
              <div className="blockText">
                <div className="dateAndAlc">
                  <p className="date">First brewed: {firstBrewed}</p>
                  <p className="alc">Alc: {abv}°</p>
                </div>
                <div className="brewDetails">
                  <p>
                    <span>Bitterness:</span> o o o o o IBU {ibu} (International
                    Bitterness Unit)
                  </p>
                  <p>
                    <span>Color:</span> <div className="brewColor" /> SRM {srm}
                    (European Brewery Convention)
                  </p>
                </div>
                <p id="paragraphe">{description}</p>
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
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L4.58579 6L0.292894 10.2929C-0.0976309 10.6834 -0.0976309 11.3166 0.292894 11.7071C0.683418 12.0976 1.31658 12.0976 1.70711 11.7071L6 7.41421L10.2929 11.7071C10.6834 12.0976 11.3166 12.0976 11.7071 11.7071C12.0976 11.3166 12.0976 10.6834 11.7071 10.2929L7.41421 6L11.7071 1.70711C12.0976 1.31658 12.0976 0.683418 11.7071 0.292893C11.3166 -0.0976311 10.6834 -0.0976311 10.2929 0.292893L6 4.58579L1.70711 0.292893Z"
                    fill="#592C1C"
                  />
                </svg>
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
                    <div>Download the recipe </div>
                    <div>
                      <svg
                        width="24"
                        height="26"
                        viewBox="0 0 24 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.5 22.3837H1.5C1.10218 22.3837 0.720645 22.5405 0.43934 22.8195C0.158036 23.0986 0 23.4771 0 23.8718C0 24.2664 0.158036 24.6449 0.43934 24.924C0.720645 25.2031 1.10218 25.3599 1.5 25.3599H22.5C22.8978 25.3599 23.2794 25.2031 23.5607 24.924C23.842 24.6449 24 24.2664 24 23.8718C24 23.4771 23.842 23.0986 23.5607 22.8195C23.2794 22.5405 22.8978 22.3837 22.5 22.3837ZM10.935 18.9759C11.0777 19.1114 11.2459 19.2176 11.43 19.2884C11.6096 19.3672 11.8037 19.4078 12 19.4078C12.1963 19.4078 12.3905 19.3672 12.57 19.2884C12.7541 19.2176 12.9223 19.1114 13.065 18.9759L19.065 13.0236C19.3475 12.7433 19.5061 12.3633 19.5061 11.967C19.5061 11.5707 19.3475 11.1907 19.065 10.9105C18.7825 10.6302 18.3995 10.4728 18 10.4728C17.6005 10.4728 17.2175 10.6302 16.935 10.9105L13.5 14.3331V1.84796C13.5 1.45329 13.342 1.07479 13.0607 0.795716C12.7794 0.516644 12.3978 0.359863 12 0.359863C11.6022 0.359863 11.2206 0.516644 10.9393 0.795716C10.658 1.07479 10.5 1.45329 10.5 1.84796V10.4715V14.3331L7.065 10.9105C6.92514 10.7717 6.75911 10.6616 6.57638 10.5866C6.39364 10.5115 6.19779 10.4728 6 10.4728C5.80221 10.4728 5.60636 10.5115 5.42363 10.5866C5.24089 10.6616 5.07486 10.7717 4.935 10.9105C4.79514 11.0492 4.6842 11.2139 4.60851 11.3952C4.53282 11.5765 4.49386 11.7708 4.49386 11.967C4.49386 12.1632 4.53282 12.3575 4.60851 12.5388C4.6842 12.7201 4.79514 12.8848 4.935 13.0236L10.935 18.9759Z"
                          fill="white"
                        />
                      </svg>
                    </div>
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
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  ibu: PropTypes.number.isRequired,
  firstBrewed: PropTypes.string.isRequired,
  abv: PropTypes.number.isRequired,
  srm: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired /* 
  description: PropTypes.string.isRequired, */,
};

export default BeerCardDetails;
