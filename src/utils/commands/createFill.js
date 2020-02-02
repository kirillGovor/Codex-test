export const createFill = (dataFill, dataArrayCanvas) => {
    const fill = (x, y, targetColor, color, dataArrayCanvas) => {

        if (!dataArrayCanvas[x]) { return; }
        if (dataArrayCanvas[x][y] !== targetColor || dataArrayCanvas[x][y] === color) { return; }

        dataArrayCanvas[x][y] = color;
        fill(x + 1, y, targetColor, color, dataArrayCanvas);
        fill(x - 1, y, targetColor, color, dataArrayCanvas);
        fill(x, y + 1, targetColor, color, dataArrayCanvas);
        fill(x, y - 1, targetColor, color, dataArrayCanvas);
    };

    if (dataArrayCanvas.length - 1 < dataFill.y || dataFill.y < 0) { return; }
    if (dataArrayCanvas[0].length - 1 < dataFill.x || dataFill.x < 0) { return; }
    fill(dataFill.y, dataFill.x, dataArrayCanvas[dataFill.y][dataFill.x], dataFill.c, dataArrayCanvas);

    return dataArrayCanvas;
};