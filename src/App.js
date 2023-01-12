import React from "react";
import "./App.css";
import { CatModel } from "./sections/CatModel";
import { Hero } from "./sections/Hero";
import { Litter } from "./sections/Litter";
import { Opening } from "./sections/Opening";
import { Window } from "./sections/Window";

function App() {
  return (
    <div className="App">
      <Opening />
      <CatModel />
      <Hero />
      <Litter />
      <Window />
    </div>
  );
}

export default App;
