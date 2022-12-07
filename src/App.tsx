import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./styles/reset.css";
import "./styles/fonts.css";
import "./styles/colors.css";
import { Header } from "./components/Header";
import { Apresentation } from "./components/Apresentation";
import { StyledApp } from "./styles/styledApp";
import { VanillaTechs } from "./components/VanillaTechs";

function App() {
  return (
    <StyledApp>
      <Header />
      <div className="sectionsZone">
      <Apresentation />
      <VanillaTechs/>
      </div>
    </StyledApp>
  );
}

export default App;