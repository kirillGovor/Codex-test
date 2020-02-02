import React from "react";
import { AppContext } from "../context.jsx";
import "./panelTools.css";

const ImportFile = () => {
  const { addCommand } = React.useContext(AppContext);

  const handleFileRead = e => {
    let content = e.target.result;
    content.split("\n").map(item => {
      addCommand(item);
    });
  };

  const upLoadFile = file => {
    let fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    if (file) fileReader.readAsText(file);
  };

  return (
    <>
      <div className="importExportButtonsBlock">
        <input
          type="file"
          className="custom-file-input"
          onChange={e => upLoadFile(e.target.files[0])}
        ></input>
      </div>
    </>
  );
};

export default ImportFile;