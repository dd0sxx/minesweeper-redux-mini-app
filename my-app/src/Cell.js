import React from 'react';

let Cell = ({mine, x, y, revealed, handleClick, key, value, board}) => {
    return (
    <div className='cell' onClick={() => handleClick({'mine':mine, 'x':x, 'y':y, 'board': board, 'value': value})}>
      {revealed ?
      <div className='revealed'>{value}</div> :
      <div className='not-revealed' >{value}</div>
      }
    </div>
  );
}

export default Cell;