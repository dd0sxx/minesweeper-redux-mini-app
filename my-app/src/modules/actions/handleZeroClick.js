
var handleZeroClick = (cell, x, y, board, value) => {
  let stringBoard = JSON.stringify(board);
  let newExample = JSON.parse(stringBoard);
  newExample[x][y].revealed = true;
  if (value === 0) {
    console.log(value, x, y)
    if (y > 0) {
      newExample[x][y - 1].revealed = true;
    }
    if (y < 9) {
      newExample[x][y + 1].revealed = true;
    }
    if (x > 0 && y > 0) {
      newExample[x - 1][y - 1].revealed = true;
    }
    if (x > 0){
       newExample[x - 1][y].revealed = true;
    }
    if (x > 0 && y < 9) {
      newExample[x - 1][y + 1].revealed = true;
    }
    if (x < 9 && y > 0) {
      newExample[x + 1][y - 1].revealed = true;
    }
    if(x < 9) {
      newExample[x + 1][y].revealed = true;
    }
    if (x < 9 && y < 9) {
       newExample[x + 1][y + 1].revealed = true;
    }
  }
  return ({
    type: 'ZERO_CLICK',
    payload: {
      newExample: newExample
    }
  })
};

export default handleZeroClick;