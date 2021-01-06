import React from 'react';

let Cell = ({cell, handleClick}) => {
    return (
    <div className='cell' onClick={(cell) => handleClick(cell)}>
      {cell}
    </div>
  );
}

export default Cell;