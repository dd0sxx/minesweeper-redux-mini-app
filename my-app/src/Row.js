import React from 'react';
import Cell from './modules/containers/cellContainer';

let Row = ({row, board}) => (
  <div className='row'>
    {row.map((cell, i) => (
      <Cell mine={cell.mine} x={cell.row} y={cell.index} revealed={cell.revealed} key={i} value={cell.value} board={board}/>
    ))}
  </div>
);

export default Row;