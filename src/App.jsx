import React from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "./components";
import { Home, Registration } from "./pages";

import "./default.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
