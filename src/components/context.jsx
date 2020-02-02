import React from "react";
import { defineAndCreateCommand } from "../utils/commands/defineAndCreateCommand";
export const AppContext = React.createContext();

class ContextApp extends React.Component {
  state = {
    dataArrayCanvas: [],
    dataStepsArrayCanvas: []
  };

  addCommand = value => {
    let newArrayCanvasAndDataStepsArrayCanvas = defineAndCreateCommand(
      value,
      this.state.dataArrayCanvas
    );
    if (newArrayCanvasAndDataStepsArrayCanvas)
      this.setState(state => ({
        dataArrayCanvas: newArrayCanvasAndDataStepsArrayCanvas.newArray,
        dataStepsArrayCanvas:
          newArrayCanvasAndDataStepsArrayCanvas.isNewcanvas === false
            ? state.dataStepsArrayCanvas.concat([
                newArrayCanvasAndDataStepsArrayCanvas.stepArray
              ])
            : [newArrayCanvasAndDataStepsArrayCanvas.stepArray]
      }));
  };

  ResetdataStepsArrayCanvas = () => {
    this.setState(() => ({ dataStepsArrayCanvas: [] }));
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          growAYearOlder: () =>
            this.setState({
              age: this.state.age + 1
            }),
          addCommand: this.addCommand,
          splitFile: this.splitFile
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default ContextApp;