import React, { useState } from 'react';
import Board from './modules/containers/boardContainer';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';


function App({results, retryAction, mines, size, handleResizeSize, handleResizeMines}) {
  let [value, setValue] = useState(0);
  let [value2, setValue2] = useState(1);
  return (results === 'Game Over' ?
  <div className='game-over'>
    <h2>Game Over</h2>
    <h4 onClick={retryAction}>retry?</h4>
  </div> :
    <div className="App">
      <header className="App-header">
        <h1>
          MineSweeper
        </h1>
      </header>
      {/* <div className="slide-div">
      <h3>Size:</h3>
      <RangeSlider className ="slider" value={size} onChange={changeSize => handleResizeSize(changeSize.target.value) } min="10" max="20"/>
      <h3>Mines:</h3>
      <RangeSlider className ="slider" value={mines} onChange={handleResizeMines(changeSize.target.value)} min="10" max="200"/>
      </div> */}
      <Board/>
    </div>
  );
}

export default App;
