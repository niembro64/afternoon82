import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PokeCard from "./components/PokeCard";

function App() {
  return (
    <div>
      <PokeCard pokemon="pikachu" />
    </div>
  );
}

export default App;
