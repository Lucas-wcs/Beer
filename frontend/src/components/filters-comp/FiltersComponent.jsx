import React from "react";
import "../../styles/FiltersCss/FiltersComponent.css";
import PropTypes from "prop-types";
import ColorFilter from "./ColorFilter";
import AlcFilter from "./AlcFilter";
import BitterFilter from "./BitterFilter";

function FiltersComponent({ col, alc, bit, resetEvent, handleFavorite, favorite }) {
  return (
    <div className="filtersComponent">
      <div className="deg-container">
        <h4>Degree</h4>
        <AlcFilter
          minAlcValue={alc.min}
          maxAlcValue={alc.max}
          alcChange={(el) => alc.callback(el)}
        />
      </div>
      <div className="bit-container">
        <h4>Bitter</h4>
        <BitterFilter
          minBitterValue={bit.min}
          maxBitterValue={bit.max}
          bitterChange={(ele) => bit.callback(ele)}
        />
      </div>
      <div className="col-container">
        <h4>Color</h4>
        <ColorFilter
          minColValue={col.min}
          maxColValue={col.max}
          colorChange={(e) => col.callback(e)}
        />
      </div>

      <div className="select">
        <button type="button" onClick={(ev) => resetEvent(ev)}>
          Clear filters
        </button>
      </div>

      <p>Show only favorites</p>
      <span
        onClick={handleFavorite}
        className="favorite-button"
        role="button"
        onKeyDown={handleFavorite}
        tabIndex={0}
      >
        {favorite ? (
          <svg
            width="25"
            height="22"
            viewBox="0 0 25 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.10233 0C2.84489 0 0 3.472 0 7.33643C0 10.9622 2.07302 14.0954 4.60759 16.5689C7.14215 19.0419 10.1672 20.8751 12.2426 21.9387C12.4043 22.0204 12.5957 22.0204 12.7574 21.9387C14.833 20.8749 17.8579 19.0417 20.3924 16.5689C22.927 14.0958 25 10.9623 25 7.33643C25 3.47195 22.1551 0 17.8977 0C15.3879 0 13.7207 1.27113 12.4999 2.98919C11.2792 1.27108 9.61199 0 7.10233 0Z"
              fill="#FFFFFF"
            />
          </svg>
        ) : (
          <svg
            width="25"
            height="22"
            viewBox="0 0 25 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.10233 0C2.84489 0 0 3.472 0 7.33643C0 10.9622 2.07302 14.0954 4.60759 16.5689C7.14215 19.0419 10.1672 20.8751 12.2426 21.9387C12.4043 22.0204 12.5957 22.0204 12.7574 21.9387C14.833 20.8749 17.8579 19.0417 20.3924 16.5689C22.927 14.0958 25 10.9623 25 7.33643C25 3.47195 22.1551 0 17.8977 0C15.3879 0 13.7207 1.27113 12.4999 2.98919C11.2792 1.27108 9.61199 0 7.10233 0Z"
              fill="#FF7E7C"
            />
          </svg>
        )}
      </span>

    </div>
  );
}

FiltersComponent.propTypes = {
  col: PropTypes.func.isRequired,
  alc: PropTypes.func.isRequired,
  bit: PropTypes.func.isRequired,
  resetEvent: PropTypes.func.isRequired,
};

export default FiltersComponent;
