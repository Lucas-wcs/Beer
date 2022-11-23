import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../styles/Recipe.css";

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

  return (
    <div>
      <Link className="back-home" to="/home">
        Go back home
      </Link>
      {beer.map((binouze) => (
        <div className="cont">
          <img
            className="imgIcon"
            src={`http://localhost:5000/api/beer/image/${binouze.imageUrl}`}
            alt=""
          />
          <h3>{binouze.name}</h3>
          <h4 className="recipe-title">Carateristics</h4>
          <div className="caract">
            <div className="aa">
              <p>abv: {binouze.abv}</p>
              <p>ibu: {binouze.ibu}</p>
              <p>srm: {binouze.srm}</p>
            </div>
            <div className="bb">
              <p>target Fg: {binouze.targetFg}</p>
              <p>target Og: {binouze.targetOg}</p>
              <p>pH: {binouze.ph}</p>
            </div>
            <div className="cc">
              <p>Attenuation level: {binouze.attenuationLevel}</p>
              <p>Volume: {binouze.volume.value} l</p>
              <p>Boil Volume: {binouze.boilVolume.value} l</p>
            </div>
          </div>
          <h4 className="recipe-title">method</h4>
          <div className="caract">
            <p>
              Mash temperature:{" "}
              {binouze.method.mashTemp.map((deg) => {
                return deg.temp.value;
              })}{" "}
              °C
            </p>
            <p>
              Mash duration:{" "}
              {binouze.method.mashTemp.map((dur) => {
                return dur.duration;
              })}{" "}
              min
            </p>
            <p>Fermentation: {binouze.method.fermentation.temp.value} °C</p>
          </div>
          <h4 className="recipe-title">Ingredients</h4>
          <div className="caract">
            <div className="caract2">
              <h4>Malts</h4>
              <div className="aa">
                {binouze.ingredients.malt.map((malts) => (
                  <li key={`malts${malts.name}`}>
                    {malts.name}: {malts.amount.value} kg
                  </li>
                ))}
              </div>
            </div>
            <div className="caract2">
              <h4>Hops:</h4>
              <div className="bb">
                {binouze.ingredients.hops.map((hops) => (
                  <li key={`hops${hops.name}`}>
                    {hops.name}:{hops.amount.value} gr
                    <ul className="hops-add">
                      <li>Add: {hops.add}</li>
                      <li>Attribute: {hops.attribute}</li>
                    </ul>
                  </li>
                ))}
              </div>
            </div>
            <div className="caract2">
              <h4>Yeast:</h4>
              <div className="cc">
                <li>{binouze.ingredients.yeast}</li>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Recipe;
