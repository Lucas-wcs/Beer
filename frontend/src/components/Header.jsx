import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <div className="NavBar">
      <div className="NavBarElements">
        <a href="/#" className="NavBarLogo">
          <img src="src/assets/oh-my-brew-logo.svg" alt="Oh My Brew Logo" />
        </a>
        <a
          href="https://www.brewdog.com/uk/diy-dog"
          target="_blank"
          className="BrewdogWebsiteLinkHeader"
          rel="noreferrer"
        >
          <img
            className="BrewdogLogo"
            src="src/assets/brewdog-logo.svg"
            alt="Brewdog Logo"
          />
          <p>Go to Brewdog DIY website</p>
          <svg
            width="25"
            height="26"
            viewBox="0 0 25 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.6668 7.39583C18.5611 7.1413 18.3589 6.93904 18.1043 6.83333C17.9791 6.77996 17.8446 6.75165 17.7085 6.75H7.29185C7.01558 6.75 6.75063 6.85975 6.55528 7.0551C6.35993 7.25045 6.25018 7.5154 6.25018 7.79167C6.25018 8.06793 6.35993 8.33289 6.55528 8.52824C6.75063 8.72359 7.01558 8.83333 7.29185 8.83333H15.1981L6.55226 17.4687C6.45463 17.5656 6.37714 17.6808 6.32425 17.8077C6.27137 17.9347 6.24414 18.0708 6.24414 18.2083C6.24414 18.3458 6.27137 18.482 6.32425 18.6089C6.37714 18.7359 6.45463 18.8511 6.55226 18.9479C6.6491 19.0455 6.76431 19.123 6.89125 19.1759C7.01818 19.2288 7.15433 19.256 7.29185 19.256C7.42936 19.256 7.56551 19.2288 7.69245 19.1759C7.81938 19.123 7.93459 19.0455 8.03143 18.9479L16.6668 10.3021V18.2083C16.6668 18.4846 16.7766 18.7496 16.9719 18.9449C17.1673 19.1403 17.4322 19.25 17.7085 19.25C17.9848 19.25 18.2497 19.1403 18.4451 18.9449C18.6404 18.7496 18.7502 18.4846 18.7502 18.2083V7.79167C18.7485 7.65554 18.7202 7.52106 18.6668 7.39583V7.39583Z"
              fill="#F29F05"
            />
          </svg>
        </a>
        <div className="BeerFoamIcon">
          <img src="src/assets/oh-my-brew-beer-foam.png" alt="Beer Foam" />
        </div>
      </div>
    </div>
  );
}

export default Header;
