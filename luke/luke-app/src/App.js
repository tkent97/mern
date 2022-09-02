
import './App.css';
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import Home from "./components/Home"
import Planets from './components/Planents';
import People from './components/People';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
        <Switch>
          <Route path="/planets/:planets_id">
            <Planets />
          </Route>
          <Route path="/people/:person_id">
            <People />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
