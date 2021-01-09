import React from 'react';

let Cell = ({mine, x, y, revealed, handleClick, key, value, board}) => {
  if (revealed) {

    return (
      <div className='revealed-cell' >
          {value === 0 ? <div className='zero'>{value}</div> :
        <div className='revealed'>{value}</div>
        }
      </div>
    );

  } else {

  }
    return (
    <div className='cell' onClick={() => handleClick({'mine':mine, 'x':x, 'y':y, 'board': board, 'value': value})}>
      <div className='not-revealed' >{value}</div>
    </div>
  );
}

export default Cell;