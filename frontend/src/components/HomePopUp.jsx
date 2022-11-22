import React from "react";
import "../styles/HomePopUp.css";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import video from "../assets/oh-my-brew-video-tutorial-test.mp4";

export default function HomePopUp({ onClose }) {
  const location = useLocation();

  if (location.pathname === "/home") return null;

  return (
    <div className="PopUpSection">
      <div className="PopUp">
        <div
          className="CloseIcon"
          onClick={onClose}
          role="button"
          onKeyDown={onClose}
          tabIndex={0}
        >
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
        </div>
        <div className="PopUpContent">
          <h3>Welcome to Oh My Brew!</h3>
          <div className="PopUpAllParts">
            <video width="100%" controls autoPlay muted>
              <source src={video} type="video/mp4" />
            </video>
            <div className="PopUpRightPart">
              <p>
                To sort beer by preferences, you can use the 3 filters at your
                disposal. you can filter your beers by alcohol degree,
                bitterness and color. Click on the heart or the button "add to
                favorites" to retrieve your beer on the main page. You can also
                check ingredients and food pairing and ultimately print beer
                recipes and brew your own beer! Happy brew!{" "}
              </p>
              <button onClick={onClose} type="button">
                Start now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

HomePopUp.propTypes = {
  onClose: PropTypes.func.isRequired,
};
