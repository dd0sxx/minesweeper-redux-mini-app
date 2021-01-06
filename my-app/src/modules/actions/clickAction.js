import handleZeroClick from './handleZeroClick';
import handleOneClick from './handleOneClick';


let handleClick = (cell) => {
  if (cell === 0 ) {
    return handleZeroClick(cell);
  } else {
    return handleOneClick(cell);
  }

}

export default handleClick;