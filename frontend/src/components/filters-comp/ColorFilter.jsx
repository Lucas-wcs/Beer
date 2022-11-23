import React from "react";
import MultiRangeSlider from "multi-range-slider-react";
import "../../styles/FiltersCss/Filters.css";
import PropTypes from "prop-types";

function ColorFilter({ colorChange, maxColValue, minColValue }) {
  return (
    <div className="color-filter">
      <MultiRangeSlider
        min={0}
        max={45}
        step={5}
        minValue={minColValue || 0}
        maxValue={maxColValue || 45}
        ruler
        labels={[0, 5, 10, 15, 20, 25, 30, 35, 40, "40+"]}
        stepOnly
        onInput={(e) => {
          colorChange(e);
        }}
      />
    </div>
  );
}

ColorFilter.propTypes = {
  colorChange: PropTypes.func.isRequired,
  minColValue: PropTypes.number.isRequired,
  maxColValue: PropTypes.number.isRequired,
};

export default ColorFilter;
