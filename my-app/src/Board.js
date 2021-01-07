import React from 'react';
import Row from './modules/containers/rowContainer';

let Board = ({exampleBoard, result}) => {
  return (
  <div className='board'>
    {exampleBoard.map((row, i) => (
      <Row className='row' row={row} key={i} board={exampleBoard}/>
    ))}
  </div>
)};

export default Board;