import cellBuilder from './hiddenBoard';

let  binaryBoard = [
  [0,0,1,0,0,0,0,0,0,0],
  [0,0,0,1,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,1,0],
  [0,0,0,0,0,0,0,0,1,0],
  [0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,1,1,0,0,0,0],
  [0,0,1,0,0,0,0,0,0,0],
  [0,1,0,0,0,0,0,0,0,0],
  [0,0,0,1,0,0,0,0,0,0],
];

let exampleBoard = binaryBoard.map((row, i, array) => {
  return row.map((bit, j) => {
    let mine;
    if (bit === 0) {
      mine = false;
    } else {
      mine = true;
    }
    return cellBuilder(mine, i, j, array);
  }
  );
});



export default exampleBoard;