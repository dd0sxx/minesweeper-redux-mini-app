import React from 'react';
import Row from './Row';

let Board = ({exampleBoard}) => {
  console.log('board: ', exampleBoard);
  return (
  <div>
    {exampleBoard.map(row => (
      <Row row={row}/>
    ))}
  </div>
)};

export default Board;