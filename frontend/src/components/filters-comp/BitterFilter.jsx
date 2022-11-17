import React from "react";
import MultiRangeSlider from "multi-range-slider-react";
import "../../styles/FiltersCss/Filters.css";
import PropTypes from "prop-types";

function BitterFilter({ bitterChange, maxBitterValue, minBitterValue }) {
  return (
    <div className="bitter-filter">
      <MultiRangeSlider
        min={0}
        max={110}
        step={10}
        minValue={minBitterValue || 0}
        maxValue={maxBitterValue || 110}
        labels={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, "+"]}
        stepOnly
        onInput={(elem) => {
          bitterChange(elem);
        }}
      />
    </div>
  );
}

BitterFilter.propTypes = {
  bitterChange: PropTypes.func.isRequired,
  minBitterValue: PropTypes.number.isRequired,
  maxBitterValue: PropTypes.number.isRequired,
};

export default BitterFilter;
