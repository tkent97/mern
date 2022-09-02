import './App.css';
import PersonCard from './components/PersonCard';
import React from 'react';

function App() {
  return (
    <div className="App">
      <PersonCard name={"Doe, Jane"} age={45} hair={"Black"} />
      <PersonCard name={"smith, John"} age={88} hair={"Brown"} />

    </div>
  );
}

export default App;
