import cellBuilder from './hiddenBoard';

let generateBoard = (n, mines) => {
  let probability =  1 - (1 / ((n * n) / mines));
  console.log(probability)
  let array = [];
  let minesLeft = mines;
  for (let i = 0; i < n; i++) {
    let subarray = [];
    for (let j = 0; j < n; j++) {
      if (minesLeft !== 0) {
        let cell = Math.random();
        if (cell < probability) { cell = 0 }
        else {
          cell = 1;
          minesLeft--;
        }
        subarray.push(cell);
      } else {
        let cell = 0;
        subarray.push(cell);
      }
    }
    array.push(subarray);
  }
  return array.map((row, i, array) => {
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
}

export default generateBoard;