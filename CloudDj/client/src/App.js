import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Link, Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/Login'
import { SliderData } from './components/SliderData';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/clouddj">
            <Login slides={SliderData} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
