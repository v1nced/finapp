import React from "react";
import Login from "./Login.js";
import { MainProvider } from "./MainContext";
import "./App.scss"


function App() {
  return (
    <div className="App">
      <MainProvider>
        <Login />
      </MainProvider>
    </div>
  );
}

export default App;
