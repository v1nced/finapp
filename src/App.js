import React from "react";
import Login from "./Login";
import Main from "./Main";
import { MainProvider } from "./MainContext";
import "./App.scss"


function App() {
  return (
    <div className="App">
      <MainProvider>
        <Main />
      </MainProvider>
    </div>
  );
}

export default App;
