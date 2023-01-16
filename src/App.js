import React from "react";
import "./App.css";
import { CatModel } from "./sections/CatModel";
import { FunFacts } from "./sections/FunFacts";
import { Glass } from "./sections/Glass";
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
      <FunFacts />
      <Glass />
    </div>
  );
}

export default App;
