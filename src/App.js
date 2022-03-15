import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PokeCard from "./components/PokeCard";
import { useState } from "react";

function App() {
  const [party, setParty] = useState([
    "blastoise",
    "charizard",
    "pikachu",
    "magikarp",
    "voltorb",
    "mew",
    "eevee",
  ]);
  const [form, setForm] = useState("");

  const onSubmitHandler = (event) => {
  event.preventDefault();
    setParty([...party, form]);
    setForm("");

}

return (
  <div className="App">
    <form onSubmit={onSubmitHandler} className="w-50 mx-auto my-5">
      <input
        value={form}
        type="text"
        onChange={(event) => setForm(event.target.value)}
      />
      <button className="btn btn-primary mx-4" type="submit">
        add to party
      </button>
    </form>
    <div className="poke-list">
      {party.map((name, i) => {
        return <PokeCard key={i} pokemon={name} />;
      })}
    </div>
  </div>
);
}

export default App;
