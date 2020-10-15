import React from "react";
import { Header } from "./components";
import { Homepage } from "./pages";

import "./default.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Homepage />
      </main>
    </div>
  );
}

export default App;
