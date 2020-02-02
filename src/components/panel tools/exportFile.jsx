import React from "react";
import { AppContext } from "../context.jsx";
import "./panelTools.css";
import { saveAs } from "file-saver";
import { parseExportFileToText } from "../../utils/parseExportFileToText/parseExportFileToText";

const ExportFile = () => {
  const { state } = React.useContext(AppContext);

  const downloadTxtFile = () => {
    let parseExportFileTotext = parseExportFileToText(
      state.dataStepsArrayCanvas
    );
    let result = "";
    parseExportFileTotext.map(item => {
      result += `${item}\n`;
    });
    let file = new File([result], "output.txt", {
      type: "text/plain;charset=utf-8"
    });
    saveAs(file);
  };

  return (
    <>
      <button className="panelToolstButtonImport" onClick={downloadTxtFile}>
        export file
      </button>
    </>
  );
};

export default ExportFile;