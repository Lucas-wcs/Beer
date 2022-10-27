import React from "react";
import "../../styles/AgeGate-button/adult-button.css";
import PropTypes from "prop-types";

function AdultButton({ activeAdult, handleChange }) {
  return (
    <button type="button" className="adult" onClick={handleChange}>
      {activeAdult ? "Yes of course" : "Yes I told you"}
    </button>
  );
}

AdultButton.propTypes = {
  activeAdult: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AdultButton;
