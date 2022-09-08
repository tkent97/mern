import Boxes from './Components/Create'
import New from './Components/New'
import React, { useState } from 'react';
import './App.css';

function App() {
  const [cube, setCube] = useState([
    { color: "blue" },
    { color: "green" },
    { color: "red" }

  ])
  const createBox = (createNew) => {
    console.log = (createNew)
    const copyBoxes = [...cube];
    copyBoxes.push(createNew)
    setCube(copyBoxes)
  }

  return (
    <div className="App">
      <h1>Box Generator</h1><br />
      <hr />
      <New createBox={createBox} />
      {
        cube.map((boxes, i) => {
          return <Boxes key={i}
            boxes={boxes} />
        })
      }
    </div>
  );
}

export default App;
