export const createDataCanvas = (cells, rows) => {
  let canvasDataArray = [];
  for (let i = 0; i < rows; i++) {
    canvasDataArray[i] = [];
    for (let j = 0; j < cells; j++) {
      canvasDataArray[i][j] = " ";
    }
  }
  
  return canvasDataArray;
};