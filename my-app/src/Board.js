import React from 'react';
import Row from './modules/containers/rowContainer';

let Board = ({exampleBoard, result}) => {
  console.log('board: ', exampleBoard, 'results: ', result);
  return (
  <div className='board'>
    {exampleBoard.map((row, i) => (
      <Row className='row' row={row} key={i}/>
    ))}
  </div>
)};

export default Board;