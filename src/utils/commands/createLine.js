const symbols = {
    line: "x",
};

export const createLine = (line, dataArrayCanvas) => {
    let filledDataarrayCanvas = dataArrayCanvas;

    if (line.x1 > line.x2)
        [line.x1, line.x2] = [line.x2, line.x1];

    if (line.y1 > line.y2)
        [line.y1, line.y2] = [line.y2, line.y1];

    line.x1 = (line.x1 < 0) ? 0 : line.x1;
    line.y1 = (line.y1 < 0) ? 0 : line.y1;
    line.x2 = (line.x2 >= filledDataarrayCanvas[0].length) ? filledDataarrayCanvas[0].length - 1 : line.x2;
    line.y2 = (line.y2 >= filledDataarrayCanvas.length) ? filledDataarrayCanvas.length - 1 : line.y2;

    if (line.x1 === line.x2) {
        for (let i = line.y1; i <= line.y2; i++) {
            filledDataarrayCanvas[i][line.x1] = symbols.line;
        }
    }

    if (line.y1 === line.y2) {
        for (let i = line.x1; i <= line.x2; i++) {
            filledDataarrayCanvas[line.y1][i] = symbols.line;
        }
    }
    
    return (filledDataarrayCanvas);
};