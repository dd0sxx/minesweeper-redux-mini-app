import React from 'react';
import Cell from './modules/containers/cellContainer';

let Row = ({row}) => (
  <div className='row'>
    {row.map((cell, i) => (
      <Cell cell={cell} key={i}/>
    ))}
  </div>
);

export default Row;