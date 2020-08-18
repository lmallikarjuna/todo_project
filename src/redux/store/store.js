import { createStore } from "redux";
import { applyMiddleware } from "redux";
import logger from "redux-logger";

import reducers from "../reducers/combine.reducer";

const store = createStore(reducers, applyMiddleware(logger));

export default store;
