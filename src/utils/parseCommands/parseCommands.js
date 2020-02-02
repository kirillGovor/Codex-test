export const parseCanvasSize = (canvas) => {
    canvas = canvas.split(" ");
    let arrCanvas = { w: canvas[1], h: canvas[2] };
    return (arrCanvas);
};

export const parseLineCoordinates = (line) => {
    line = line.split(" ");
    let lineСoordinates = { x1: Number(line[1]) - 1, y1: Number(line[2]) - 1, x2: Number(line[3]) - 1, y2: Number(line[4]) - 1 };
    return (lineСoordinates);
};

export const parseRectangleCoordinates = (rectangle) => {
    let splitRectangle = rectangle.split(" ");
    let rectangleСoordinates = { x1: Number(splitRectangle[1]) - 1, y1: Number(splitRectangle[2]) - 1, x2: Number(splitRectangle[3]) - 1, y2: Number(splitRectangle[4]) - 1 };
    return (rectangleСoordinates);
};

export const parseFillCoordinatesWithValueColor = (fill) => {
    fill = fill.split(" ");
    let dataFill = { x: Number(fill[1])-1, y: Number(fill[2])-1, c: fill[3] };
    return (dataFill);
};