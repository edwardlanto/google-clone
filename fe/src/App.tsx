import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Users from './components/Users';
import Home from './views/Home';
import Search from './views/Search';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
