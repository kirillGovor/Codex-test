import React from "react";
import "./canvasCell.css";

const CanvasCell = (props) => {
  // eslint-disable-next-line react/prop-types
  return <div key ={props.keyValue} className="canvasCell">{props.itemValue}</div>;
};

export default CanvasCell;