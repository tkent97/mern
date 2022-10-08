import Home from './components/Home';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';
import { Route, Routes, Link, } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1>Routing example</h1>
      <p>
        <Link to="/">Home</Link>
        |
        <Link to="/form">Form</Link>
      </p>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/results/:id" element={<Results />} />
      </Routes>


    </div>
  );
}

export default App;
