import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../styles/Recipe.css";
import kettle from "@assets/oh-my-brew-icon-ingredients.png";
import maltIcon from "@assets/oh-my-brew-icon-malt.png";
import hopsIcon from "@assets/oh-my-brew-icon-hops.png";
import yeastIcon from "@assets/oh-my-brew-icon-yeast.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Recipe() {
  const { id } = useParams();

  const [beer, setBeer] = useState([]);

  const getBeer = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/beer/${id}`)

      .then((res) => {
        setBeer(res.data);
      });
  };

  useEffect(() => {
    getBeer();
  }, []);

  const exportPDF = () => {
    const input = document.getElementById("recipe");
    html2canvas(input, {
      logging: true,
      letterRendering: 1,
      useCORS: true,
    }).then((canvas) => {
      const imgWidth = 208;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("recipe.pdf");
    });
  };

  return (
    <div id="recipe" className="recipeContainer">
      <Link className="back-home" to="/home">
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.292893 6.70711C-0.0976313 6.31658 -0.0976314 5.68342 0.292893 5.29289L5.29289 0.292893C5.68342 -0.0976307 6.31658 -0.0976308 6.70711 0.292893C7.09763 0.683418 7.09763 1.31658 6.70711 1.70711L2.41421 6L6.70711 10.2929C7.09763 10.6834 7.09763 11.3166 6.70711 11.7071C6.31658 12.0976 5.68342 12.0976 5.29289 11.7071L0.292893 6.70711Z"
            fill="#F29F05"
          />
        </svg>
        <p>Go back home</p>
      </Link>
      {beer.map((binouze) => (
        <div className="contentCard">
          <div className="header">
            <div className="contentRecipe">
              <p>Recipe</p>
            </div>
            <div>
              <h3>{binouze.name} -</h3>
              <h3>
                <span>{binouze.tagline}</span>
              </h3>
            </div>
          </div>

          <div className="part1">
            <div className="beerImage">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/api/beer/image/${binouze.imageUrl
                  }`}
                alt="Beer"
              />
            </div>
            <div className="partCaracteristics">
              <h4 className="partName">Caracteristics</h4>
              <div className="partContentCaracteristics">
                <div className="column">
                  <p>
                    <span className="boldHeading">abv:</span> {binouze.abv}
                  </p>
                  <p>
                    <span className="boldHeading">ibu:</span> {binouze.ibu}
                  </p>
                  <p>
                    <span className="boldHeading">srm:</span> {binouze.srm}
                  </p>
                </div>
                <div className="column">
                  <p>
                    <span className="boldHeading">Target Fg:</span>{" "}
                    {binouze.targetFg}
                  </p>
                  <p>
                    <span className="boldHeading">Target Og:</span>{" "}
                    {binouze.targetOg}
                  </p>
                  <p>
                    <span className="boldHeading">pH:</span> {binouze.ph}
                  </p>
                </div>
                <div className="column">
                  <p>
                    <span className="boldHeading">Attenuation level:</span>{" "}
                    {binouze.attenuationLevel}
                  </p>
                  <p>
                    <span className="boldHeading">Volume: </span>
                    {binouze.volume.value}l
                  </p>
                  <p>
                    <span className="boldHeading">Boil Volume:</span>{" "}
                    {binouze.boilVolume.value}l
                  </p>
                </div>
                <div className="column">
                  <img className="kettle" src={kettle} alt="Kettle" />
                </div>
              </div>
            </div>
          </div>
          <div className="part2">
            <h4 className="partName">Method</h4>
            <div className="partContentMethod">
              <p>
                <span className="boldHeading">Mash temperature:</span>{" "}
                {binouze.method.mashTemp.map((deg) => {
                  return deg.temp.value;
                })}{" "}
                °C
              </p>
              <p>
                <span className="boldHeading">Mash duration:</span>{" "}
                {binouze.method.mashTemp.map((dur) => {
                  return dur.duration;
                })}{" "}
                min
              </p>
              <p>
                <span className="boldHeading">Fermentation:</span>{" "}
                {binouze.method.fermentation.temp.value}°C
              </p>
            </div>
          </div>
          <div className="part3">
            <h4 className="partName">Ingredients</h4>
            <div className="partContentIngredients">
              <div className="columnIngredients">
                <div className="ingredientsTitle">
                  <img src={maltIcon} alt="Malt Icon" />
                  <h4>Malts:</h4>
                </div>
                {binouze.ingredients.malt.map((malts) => (
                  <li key={`malts${malts.name}`}>
                    <span className="boldHeading">{malts.name}: </span>
                    {malts.amount.value}kg
                  </li>
                ))}
              </div>

              <div className="columnHops">
                <div className="ingredientsTitle">
                  <img src={hopsIcon} alt="Hops Icon" />
                  <h4>Hops:</h4>
                </div>
                {binouze.ingredients.hops.map((hops) => (
                  <li key={`hops${hops.name}`}>
                    <span className="boldHeading">{hops.name}: </span>{" "}
                    {hops.amount.value}g,
                    <br />
                    <span className="hopsAdd">Add: {hops.add} - </span>
                    <span className="hopsAdd">Attribute: {hops.attribute}</span>
                  </li>
                ))}
              </div>

              <div className="columnIngredients">
                <div className="ingredientsTitle">
                  <img src={yeastIcon} alt="Yeast Icon" />
                  <h4>Yeast:</h4>
                </div>
                <li>
                  <span className="boldHeading">
                    {binouze.ingredients.yeast}
                  </span>
                </li>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div>
        <button type="button" onClick={exportPDF}>
          Download the Recipe
        </button>
      </div>
    </div>
  );
}
export default Recipe;
