import React, { useState, useEffect } from "react";
import { AppContext } from "../context.jsx";
import "./panelTools.css";
import ImportFile from "./importFile";
import ExportFile from "./exportFile";

const PanelTools = () => {
  const { addCommand } = React.useContext(AppContext);
  const [inputCommandValue, setinputCommandValue] = useState();

  const handleCommand = event => {
    setinputCommandValue(event.target.value);
  };

  const addCommandValue = () => {
    addCommand(inputCommandValue);
  };

  const handleKeyPress = event => {
    if (event.keyCode === 13) {
      addCommand(inputCommandValue);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <>
      <div className="panelToolsBlock">
        <input
          className="panelToolsInput"
          onChange={handleCommand}
          type="text"
        ></input>
        <button className="panelToolstButton" onClick={addCommandValue}>
          draw
        </button>
      </div>
      <div className="importExportButtonsBlock">
        <ImportFile />
        <ExportFile />
      </div>
    </>
  );
};

export default PanelTools;