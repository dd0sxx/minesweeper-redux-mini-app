import handleZeroClick from './handleZeroClick';
import handleOneClick from './handleOneClick';


let handleClick = ({mine, x, y, key, board, value}) => {
  if (!mine) {
    return handleZeroClick(mine, x, y, board, value);
  } else {
    return handleOneClick(mine);
  }

}

export default handleClick;