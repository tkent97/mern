import { BrowserRouter } from 'react-router-dom'
import { Link, Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import Main from "./components/Main"
import Pet from "./components/Pet"
import New from "./components/New"
import Edit from './components/Edit';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/pet/:id/edit">
            <Edit />
          </Route>
          <Route exact path="/pet/new">
            <New />
          </Route>
          <Route exact path="/pet/:id">
            <Pet />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
