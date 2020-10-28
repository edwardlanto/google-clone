import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Home = React.lazy(() => import("./views/Home"));
const SearchPage = React.lazy(() => import("./views/SearchPage"));
const PageNotFound = React.lazy(() => import("./views/PageNotFound"));

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Suspense fallback={<div></div>}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/search">
              <SearchPage />
            </Route>
            <Route component={PageNotFound} />
          </Suspense>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
