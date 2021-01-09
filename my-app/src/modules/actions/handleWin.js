import generateBoard from '../data/generateBoard';
let newBoard = generateBoard(10,10);

let handleWin = () => ({
  type: 'WIN',
  payload: {
    result: 'Win',
    exampleBoard: newBoard
  }
});

export default handleWin;