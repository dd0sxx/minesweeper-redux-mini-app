import React from 'react';
import Board from './modules/containers/boardContainer';

function App({results, retryAction}) {
  console.log('results: ', results);
  return (results === 'Game Over' ?
  <div className='game-over'>
    <h2>Game Over</h2>
    <h4 onClick={retryAction()}>retry?</h4>
  </div> :
    <div className="App">
      <header className="App-header">
        <p>
          MineSweeper
        </p>
      </header>
      <Board/>
    </div>
  );
}

export default App;
