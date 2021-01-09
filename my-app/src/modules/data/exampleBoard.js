import cellBuilder from './hiddenBoard';
import generateBoard from './generateBoard';

let n = 10;
let mines = 10;
// let  binaryBoard = [
//   [0,0,1,0,0,0,0,0,0,0],
//   [0,0,0,1,0,0,0,0,0,0],
//   [0,0,0,0,0,0,0,0,1,0],
//   [0,0,0,0,0,0,0,0,1,0],
//   [0,0,0,0,0,0,0,1,0,0],
//   [0,0,0,0,0,0,0,0,0,0],
//   [0,0,0,0,1,1,0,0,0,0],
//   [0,0,1,0,0,0,0,0,0,0],
//   [0,1,0,0,0,0,0,0,0,0],
//   [0,0,0,1,0,0,0,0,0,0],
// ];



let exampleBoard = generateBoard(n, mines);




export default exampleBoard;