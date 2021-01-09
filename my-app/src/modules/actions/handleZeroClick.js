
var handleZeroClick = (cell, x, y, board, value) => {
  let stringBoard = JSON.stringify(board);
  let newExample = JSON.parse(stringBoard);
  newExample[x][y].revealed = true;
  if (value === 0) {
    newExample = blowUp(newExample, x, y)
  }
  return ({
    type: 'ZERO_CLICK',
    payload: {
      newExample: newExample
    }
  })
};


let blowUp = (board, x, y) => {
  let newExample = board;
  let innerFunc = (newExample, x, y) => {
  if (y >= 0) {
    if (newExample[x] && newExample[x][y - 1]) {
    if (!newExample[x][y - 1].revealed)  {
    newExample[x][y - 1].revealed = true;
    if ( newExample[x][y - 1].value === 0) {
      innerFunc(newExample, x, (y - 1));
    }
  }
  }
  }
  if (y <= 9) {
    if (newExample[x] && newExample[x][y + 1]) {
     if (!newExample[x][y + 1].revealed)  {
    newExample[x][y + 1].revealed = true;
    if ( newExample[x][y + 1].value === 0) {
      innerFunc(newExample, x, (y + 1));
    }
  }
  }
  }
  if (x >= 0 && y >= 0) {
    if (newExample[x - 1] && newExample[x - 1][y - 1]) {
    if (!newExample[x - 1][y - 1].revealed)  {
    newExample[x - 1][y - 1].revealed = true;
    if ( newExample[x - 1][y - 1].value === 0) {
      innerFunc(newExample, (x - 1), (y - 1));
    }
  }
  }
  }
  if (x >= 0){
    if (newExample[x - 1] && newExample[x - 1][y]) {
    if (!newExample[x - 1][y].revealed)  {
     newExample[x - 1][y].revealed = true;
     if ( newExample[x - 1][y].value === 0) {
        innerFunc(newExample, (x - 1), y);
    }
  }
  }
  }
  if (x >= 0 && y <= 9) {
    if (newExample[x - 1] && newExample[x - 1][y + 1]) {
    if (!newExample[x - 1][y + 1].revealed)  {
    newExample[x - 1][y + 1].revealed = true;
    if ( newExample[x - 1][y + 1].value === 0) {
        blowUp(newExample, (x - 1), (y + 1));
    }
  }
  }
  }
  if (x <= 9 && y >= 0) {
    if (newExample[x + 1] && newExample[x + 1][y - 1]) {
    if (!newExample[x + 1][y - 1].revealed)  {
    newExample[x + 1][y - 1].revealed = true;
    if ( newExample[x + 1][y - 1].value === 0) {
      blowUp(newExample, (x + 1), (y - 1));
    }
  }
  }
  }
  if(x <= 9) {
    if (newExample[x + 1] && newExample[x + 1][y]) {
    if (!newExample[x + 1][y].revealed)  {
    newExample[x + 1][y].revealed = true;
    if ( newExample[x + 1][y].value === 0) {
      innerFunc(newExample, (x + 1), y);
      }
    }
    }
    }
  if (x <= 9 && y <= 9) {
    if (newExample[x + 1] && newExample[x + 1][y + 1]) {
    if (!newExample[x + 1][y + 1].revealed)  {
     newExample[x + 1][y + 1].revealed = true;
     if ( newExample[x + 1][y + 1].value === 0) {
      innerFunc(newExample, (x + 1), (y + 1));
    }
  }
  }
  }
}
  innerFunc(newExample, x, y);
  return newExample;
}


export default handleZeroClick;