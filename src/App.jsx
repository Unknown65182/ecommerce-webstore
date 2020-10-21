import React from "react";
import { Route, Switch } from "react-router-dom";
import { MainLayout } from "./layouts";
import { Homepage, Registration } from "./pages";

import "./default.scss";

function App() {
  return (
    <div className="app">
      <MainLayout>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
        </Switch>
      </MainLayout>
    </div>
  );
}

export default App;
