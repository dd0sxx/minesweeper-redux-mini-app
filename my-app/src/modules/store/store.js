import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import boardReducer from "../reducers/boardReducer";
import exampleBoard from '../data/exampleBoard';

export default createStore(
  boardReducer,
  { exampleBoard: exampleBoard },
  applyMiddleware(logger)
  );
