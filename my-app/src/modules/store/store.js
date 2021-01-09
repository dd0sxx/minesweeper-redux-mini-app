import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import boardReducer from "../reducers/boardReducer";
import exampleBoard from '../data/exampleBoard';
import hiddenBoard from '../data/hiddenBoard';

export default createStore(
    boardReducer,
  {
    exampleBoard: exampleBoard,
    results: null,
    size: 10,
    mines: 10
  },
  applyMiddleware(logger)
  );
