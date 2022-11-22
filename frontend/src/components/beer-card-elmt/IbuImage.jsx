import React from "react";
import PropTypes from "prop-types";
import IbuIcon from "../../assets/oh-my-brew-icon-bitterness-high.png";
import IbuIconLow from "../../assets/oh-my-brew-icon-bitterness-placeholder.png";

export default function IbuImage({ ibu }) {
  if (ibu <= 20) {
    return (
      <>
        <img src={IbuIcon} alt="" />
        <img src={IbuIconLow} alt="" />
        <img src={IbuIconLow} alt="" />
        <img src={IbuIconLow} alt="" />
        <img src={IbuIconLow} alt="" />
      </>
    );
  }
  if (ibu <= 40) {
    return (
      <>
        <img src={IbuIcon} alt="" />
        <img src={IbuIcon} alt="" />
        <img src={IbuIconLow} alt="" />
        <img src={IbuIconLow} alt="" />
        <img src={IbuIconLow} alt="" />
      </>
    );
  }
  if (ibu <= 60) {
    return (
      <>
        <img src={IbuIcon} alt="" />
        <img src={IbuIcon} alt="" />
        <img src={IbuIcon} alt="" />
        <img src={IbuIconLow} alt="" />
        <img src={IbuIconLow} alt="" />
      </>
    );
  }
  if (ibu <= 80) {
    return (
      <>
        <img src={IbuIcon} alt="" />
        <img src={IbuIcon} alt="" />
        <img src={IbuIcon} alt="" />
        <img src={IbuIcon} alt="" />
        <img src={IbuIconLow} alt="" />
      </>
    );
  }
  if (ibu >= 81) {
    return (
      <>
        <img src={IbuIcon} alt="" />
        <img src={IbuIcon} alt="" />
        <img src={IbuIcon} alt="" />
        <img src={IbuIcon} alt="" />
        <img src={IbuIcon} alt="" />
      </>
    );
  }
}
IbuImage.propTypes = {
  ibu: PropTypes.number.isRequired,
};
