import React from "react";
import { useState } from "react";

const PokeCard = (props) => {
  const [defaultURL, setDefaultURL] = useState("");
  const [shinyURL, setShinyURL] = useState("");

  const onClickHandler = () => {
    console.log("Fetch Info");
    fetch("https://pokeapi.co/api/v2/pokemon/" + props.pokemon)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.sprites.front_default);
        setDefaultURL(res.sprites.front_default);
        setShinyURL(res.sprites.front_shiny);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <h1>TEST </h1>
      <img src={defaultURL} alt={props.pokemon} />
      <button onClick={onClickHandler}>get image</button>
    </div>
  );
};

export default PokeCard;
