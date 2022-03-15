import React, { useLayoutEffect } from "react";
import { useState } from "react";
import { useEffect } from "react";

const PokeCard = (props) => {
  const [defaultURL, setDefaultURL] = useState("");
  const [shinyURL, setShinyURL] = useState("");

  // 2 parameters
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + props.pokemon)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.sprites.front_default);
        setDefaultURL(res.sprites.front_default);
        setShinyURL(res.sprites.front_shiny);
      })
      .catch((err) => console.log(err));
  }, []);

  const onClickHandler = () => {
    console.log("Fetch Info");
  };

  return (
    <div className="poke-card">
      <h1>TEST </h1>
      <img src={defaultURL} alt={props.pokemon} />
      <h2>{props.pokemon}</h2>
    </div>
  );
};

export default PokeCard;
