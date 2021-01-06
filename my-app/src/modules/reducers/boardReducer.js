import Redux from 'redux';
import exampleBoard from '../data/exampleBoard';


let boardReducer = (state = exampleBoard, action) => {
  switch (action.type) {
  case 'CHANGE_BOARD':
    return action.board;
  default:
    return state;
  }
};

export default boardReducer;