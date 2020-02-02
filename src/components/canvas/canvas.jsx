import React from "react";
import { AppContext } from "../context.jsx";
import CanvasCell from "../canvas/canvasСell";
import "./canvasCell.css";

const Canvas = () => {
  const { state } = React.useContext(AppContext);

  return (
    <AppContext.Consumer>
      {() => (
        <div className="CanvasBlock">
          {state.dataArrayCanvas.map((item, indexRow) => {
            return (
              <>
                <div key={indexRow} className="canvasRow">
                  {item.map((item, indexColumn) => {
                    return (
                      <CanvasCell
                        key={indexColumn.toString() + indexRow.toString()}
                        keyValue={indexColumn + indexRow}
                        itemValue={item}
                      />
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default Canvas;