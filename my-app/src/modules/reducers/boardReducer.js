import Redux from 'redux';
import exampleBoard from '../data/exampleBoard';


let boardReducer = (state = exampleBoard, action) => {
  console.log(action);
  switch (action.type) {
  case 'CHANGE_BOARD':
    return action.board;

    case 'ONE_CLICK':
      return Object.assign({}, state, {
        results: 'Game Over'
      });

      case 'RETRY':
      return Object.assign({}, state, {
        exampleBoard: exampleBoard,
        results: null
      });
  default:
    return state;
  }
};

export default boardReducer;