import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Main from "./components/Main"
import { Link, Switch, Route, Redirect } from 'react-router-dom'
import Products from './components/Products';
import Show from './components/Show'
import Edit from './components/Edit'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/update/:id">
            <Edit />
          </Route>
          <Route path="/:id">
            <Show />
          </Route>
          <Route path="/">
            <Main />
            <Products />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
