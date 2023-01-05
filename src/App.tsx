import { Header } from "components/Header/Header";
import React from "react";
import "./App.css";
import { Main } from "./pages/Main/Main";

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
