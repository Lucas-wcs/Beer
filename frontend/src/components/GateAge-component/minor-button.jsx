import React from "react";
import "../../styles/AgeGate-button/minor-button.css";
import PropTypes from "prop-types";

function Minorbutton(props) {
  const { getOut } = props;

  return (
    <button type="button" className="minor" onClick={getOut}>
      Oops I'm not
    </button>
  );
}
Minorbutton.propTypes = {
  getOut: PropTypes.func.isRequired,
};

export default Minorbutton;
