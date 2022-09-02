import { useState } from 'react'
import './App.css';

function App() {
  const [poke, setPoke] = useState();
  const fetchPoke = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=900")
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        console.log(jsonResponse.results)
        setPoke(jsonResponse.results)
      })
      .catch(someErr => console.log(someErr))
  }
  return (
    <div className="App">
      <button onClick={fetchPoke}>Fetch Pokemon</button>
      <hr />
      {JSON.stringify(poke)}
      <li>{pokemon.name}</li>
    </div>
  );
}

export default App;
