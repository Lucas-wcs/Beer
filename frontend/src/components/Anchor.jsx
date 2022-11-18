import React from "react";
import "../styles/Anchor.css";
import PropTypes from "prop-types";

function Anchor({ onScrollToTop }) {
  return (
    <div>
      <button onClick={onScrollToTop} className="anchor" type="button">
        <svg
          width="22"
          height="12"
          viewBox="0 0 22 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 11L11 1L21 11"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default Anchor;

Anchor.propTypes = {
  onScrollToTop: PropTypes.func.isRequired,
};
