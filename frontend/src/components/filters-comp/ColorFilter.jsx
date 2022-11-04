import React from "react";
import MultiRangeSlider from "multi-range-slider-react";
import "../../styles/FiltersCss/ColorFilter.css";
import PropTypes from "prop-types";

function ColorFilter({ minMaxChange, maxValue, minValue }) {
  return (
    <div className="color-filter">
      <MultiRangeSlider
        min={0}
        max={40}
        step={5}
        minValue={minValue}
        maxValue={maxValue}
        ruler
        labels={[0, 5, 10, 15, 20, 25, 30, 35, 40]}
        stepOnly
        onInput={(e) => {
          minMaxChange(e);
        }}
      />
    </div>
  );
}

ColorFilter.propTypes = {
  minMaxChange: PropTypes.func.isRequired,
  minValue: PropTypes.func.isRequired,
  maxValue: PropTypes.func.isRequired,
};

export default ColorFilter;
