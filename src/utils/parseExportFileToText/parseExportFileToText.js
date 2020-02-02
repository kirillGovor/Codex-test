export const parseExportFileToText = (arraysDataCanvas) => {
    let canvas = [];
    let allCanvas = [];
    arraysDataCanvas.forEach((array) => {
        for (let i = 0; i < +array.length + 2; i++) {
            canvas[i] = [];
            for (let j = 0; j < array[0].length + 2; j++) {
                canvas[i][j] = (!i || i === array.length + 1) ? "-"
                    : (!j || j === +array[0].length + 1) ? "|" : array[i - 1][j - 1];
            }
        }

        let stringCanvas = canvas.reduce((result, row) => `${result}${row.join("")}\n`, "");
        allCanvas = allCanvas.concat([stringCanvas]);
        canvas = [];
    });
    
    return (allCanvas);
};