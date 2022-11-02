import AdultButton from "@components/GateAge-component/adult-button";
import Minorbutton from "@components/GateAge-component/minor-button";
import React, { useState } from "react";
import "../styles/AgeGate.css";
import HomePage from "./HomePage";

function AgeGate() {
  const [activeMinor, setActiveMinor] = useState("true");
  function getOut() {
    setActiveMinor(!activeMinor);
  }

  const [toHomePage, setToHomePage] = useState(false);

  const [activeAdult, setActiveAdult] = useState(true);
  function handleChange() {
    setActiveAdult(!activeAdult);
    if (!activeAdult) {
      setToHomePage(true);
    }
  }

  const func = () => {
    if (!activeMinor && !activeAdult) {
      return "button-cont-off button-cont-dir";
    }
    if (!activeMinor && activeAdult) {
      return "button-cont-off button-cont-dir-inv";
    }
    if (activeMinor && !activeAdult) {
      return "button-cont-on button-cont-dir";
    }
    return "button-cont-on button-cont-dir-inv";
  };

  return toHomePage ? (
    <HomePage />
  ) : (
    <div className="AgeGate-container">
      <div className="logo">
        <svg
          width="136"
          height="40"
          viewBox="0 0 136 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#27140C" />
          <rect x="48" width="40" height="40" rx="10" fill="#27140C" />
          <path
            d="M96 10C96 4.47715 100.477 0 106 0H110C115.523 0 120 4.47715 120 10V21H96V10Z"
            fill="#27140C"
          />
          <path
            d="M96 15H126C131.523 15 136 19.4772 136 25V30C136 35.5228 131.523 40 126 40H106C100.477 40 96 35.5228 96 30V15Z"
            fill="#27140C"
          />
          <rect x="56" y="20" width="8" height="20" fill="#F29F05" />
          <rect x="72" y="20" width="8" height="20" fill="#F29F05" />
          <rect x="104" y="8" width="8" height="23" rx="4" fill="#BF5B04" />
          <rect x="120" y="23" width="8" height="8" rx="4" fill="#FFF8E3" />
          <circle cx="60" cy="20" r="4" fill="#FFF8E3" />
          <circle cx="76" cy="20" r="4" fill="#FFF8E3" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.1716 16.1716C26.6095 14.6095 24.0768 14.6095 22.5147 16.1716L19.6716 19.0147L16.8284 16.1716C15.2663 14.6095 12.7337 14.6095 11.1716 16.1716C9.60948 17.7337 9.60948 20.2663 11.1716 21.8284L16.8284 27.4853C17.6134 28.2703 18.6436 28.6608 19.6725 28.6568C20.7008 28.6604 21.7302 28.2698 22.5147 27.4853L28.1716 21.8284C29.7337 20.2663 29.7337 17.7337 28.1716 16.1716Z"
            fill="#FF7E7C"
          />
        </svg>
      </div>

      <h1 className={!activeMinor ? "ageGate-title-off" : "ageGate-title-on"}>
        Are you{" "}
        <span className={activeAdult && "sure"}>
          <span className="sure2"> sure </span>you're{" "}
        </span>
        over 18 years old?
      </h1>

      <div>
        {!activeMinor && (
          <img
            className="gif"
            alt="gif"
            src="https://i.imgur.com/qVsyUhi.gif"
          />
        )}
      </div>

      <div className={func()}>
        <AdultButton
          activeAdult={activeAdult}
          handleChange={() => handleChange()}
        />
        <Minorbutton activeMinor={activeMinor} getOut={() => getOut()} />
      </div>
    </div>
  );
}

export default AgeGate;
