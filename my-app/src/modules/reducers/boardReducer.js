import Redux from 'redux';
import exampleBoard from '../data/exampleBoard';


let boardReducer = (state = exampleBoard, action) => {
  switch (action.type) {
  case 'CHANGE_BOARD':
    return action.board;

    case 'ONE_CLICK':
      return Object.assign({}, state, {
        results: 'Game Over'
      });

      case 'ZERO_CLICK':
        return Object.assign({}, state, {
          exampleBoard: action.payload.newExample,
          results: null
        });

      case 'RETRY':
      return Object.assign({}, state, {
        results: null
      });

      case 'RESIZE_MINES':
        return Object.assign({}, state, {
          mines: action.payload.mines
        });

        case 'RESIZE_SIZE':
          return Object.assign({}, state, {
            size: action.payload.size
          });

  default:
    return state;
  }
};

export default boardReducer;