import React from "react";
import PropTypes from "prop-types";

export default function ColorImage({ srm }) {
  if (srm <= 5) {
    return <div className="brewColor" />;
  }
  if (srm <= 10) {
    return <div className="brewColor2" />;
  }
  if (srm <= 15) {
    return <div className="brewColor3" />;
  }
  if (srm <= 30) {
    return <div className="brewColor4" />;
  }
  if (srm >= 31) {
    return <div className="brewColor5" />;
  }
}

ColorImage.propTypes = {
  srm: PropTypes.number.isRequired,
};
