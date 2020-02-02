import React from "react";
import "./App.css";
import ContextApp from "./components/context.jsx";
import Canvas from "./components/canvas/canvas.jsx";
import PanelTools from "./components/panel tools/panelTools";

function App() {
  return (
    <>
      <ContextApp>
        <PanelTools />
        <Canvas />
      </ContextApp>
    </>
  );
}

export default App;