import React from 'react';
import Cell from './Cell';

let Row = ({row}) => (
  <div>
    {row.map(cell => (
      <Cell cell={cell}/>
    ))}
  </div>
);

export default Row;