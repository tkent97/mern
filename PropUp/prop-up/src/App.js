import './App.css';
import React from 'react';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard someText={"Jane doe"} age={45} />
      <PersonCard someText={"smith john"} age={88} />
      <PersonCard someText={"Fillmore, Millard"} age={45} />
      <PersonCard someText={"Smith maria"} age={45} />
    </div>
  );
}

export default App;
