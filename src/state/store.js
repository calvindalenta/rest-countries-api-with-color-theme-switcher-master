import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import * as reducers from "./ducks";

export default createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);