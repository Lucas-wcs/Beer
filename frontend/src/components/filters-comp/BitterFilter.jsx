import React from "react";
import MultiRangeSlider from "multi-range-slider-react";
import "../../styles/FiltersCss/BitterFilter.css";
import PropTypes from "prop-types";

function BitterFilter({ bitterChange, maxBitterValue, minBitterValue }) {
  return (
    <div className="bitter-filter">
      <MultiRangeSlider
        min={0}
        max={110}
        step={10}
        minValue={minBitterValue}
        maxValue={maxBitterValue}
        labels={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, "100+"]}
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
  minBitterValue: PropTypes.func.isRequired,
  maxBitterValue: PropTypes.func.isRequired,
};

export default BitterFilter;
