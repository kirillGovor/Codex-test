import { parseCanvasSize, parseLineCoordinates, parseRectangleCoordinates, parseFillCoordinatesWithValueColor } from "../parseCommands/parseCommands";
import { createDataCanvas } from "./createCanvas";
import { createLine } from "./createLine";
import { createRectangle } from "./createRectangle";
import { createFill } from "./createFill";

export const defineAndCreateCommand = (value, dataArrayCanvas) => {
    switch (value[0].toUpperCase()) {
        case "C": {
            let newCanvas = parseCanvasSize(value);
            return ({ newArray: createDataCanvas(newCanvas.w, newCanvas.h), stepArray: JSON.parse(JSON.stringify(createDataCanvas(newCanvas.w, newCanvas.h))), isNewcanvas: true });
        }

        case "L": {
            if (dataArrayCanvas.length>0) {
                let line = parseLineCoordinates(value.slice(1, value.length));
                let newArrayWithLine = createLine(line,
                    dataArrayCanvas
                );
                return ({ newArray: newArrayWithLine, stepArray: JSON.parse(JSON.stringify(newArrayWithLine)), isNewcanvas: false });
            }
            break;
        }

        case "R": {
            if (dataArrayCanvas.length>0) {
                let rectangleCoordinates = parseRectangleCoordinates(
                    value.slice(1, value.length)
                );
                let newArrayWithRecyangle = createRectangle(rectangleCoordinates,
                    dataArrayCanvas
                );
                return ({ newArray: newArrayWithRecyangle, stepArray: JSON.parse(JSON.stringify(newArrayWithRecyangle)), isNewcanvas: false });
            }
            break;
        }

        case "B": {
            if (dataArrayCanvas.length>0) {
                let fillCoordinates = parseFillCoordinatesWithValueColor(
                    value.slice(1, value.length)
                );
                let newArrayWithFill = createFill(fillCoordinates,
                    dataArrayCanvas
                );
                return ({ newArray: newArrayWithFill, stepArray: JSON.parse(JSON.stringify(newArrayWithFill)), isNewcanvas: false });
            }
            break;
        }

        default:
            console.log("command is not defined");
            break;
    }
};