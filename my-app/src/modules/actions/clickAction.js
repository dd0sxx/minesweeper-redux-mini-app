import handleZeroClick from './handleZeroClick';
import handleOneClick from './handleOneClick';
import handleWin from './handleWin';


let handleClick = ({mine, x, y, key, board, value}) => {
  // let win = true;
  // for (let i = 0; i < board.length; i++) {
  //   let row = board[i];
  //   console.log('entering loop', row)
  //   if (win === false) { break; }
  //   for (let j = 0; j < row.length; j++) {
  //     console.log(row[j]);
  //     console.log('entering inner loop');
  //     // if (cell.revealed && !cell.mine) {
  //     //   console.log('revealed and not a mine')
  //     // } else if (cell.mine) {} else {
  //     //   console.log('failed here: ', cell);
  //     //   win = false;
  //     //   break;
  //     // }
  //   }
  // }
  // if (win) {
  //   return handleWin();
  // }
  if (!mine) {
    return handleZeroClick(mine, x, y, board, value);
  } else {
    return handleOneClick(mine);
  }

}

export default handleClick;