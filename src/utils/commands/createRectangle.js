import { createLine } from "./createLine";

export const createRectangle = (coordinates, dataArrayCanvas) => {
    dataArrayCanvas = createLine({ x1: coordinates.x1, y1: coordinates.y1, x2: coordinates.x1, y2: coordinates.y2 }, dataArrayCanvas);
    dataArrayCanvas = createLine({ x1: coordinates.x2, y1: coordinates.y1, x2: coordinates.x2, y2: coordinates.y2 }, dataArrayCanvas);
    dataArrayCanvas = createLine({ x1: coordinates.x1, y1: coordinates.y1, x2: coordinates.x2, y2: coordinates.y1 }, dataArrayCanvas);
    dataArrayCanvas = createLine({ x1: coordinates.x1, y1: coordinates.y2, x2: coordinates.x2, y2: coordinates.y2 }, dataArrayCanvas);

    return dataArrayCanvas;
};
