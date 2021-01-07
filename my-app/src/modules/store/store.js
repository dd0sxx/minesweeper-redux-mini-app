import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import boardReducer from "../reducers/boardReducer";
import exampleBoard from '../data/exampleBoard';
import hiddenBoard from '../data/hiddenBoard';

export default createStore(
    boardReducer,
  {
    exampleBoard: exampleBoard,
    results: null
  },
  applyMiddleware(logger)
  );
