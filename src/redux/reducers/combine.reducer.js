import { combineReducers } from "redux";

import addItemReducer from "./addItem.reducer";

export default combineReducers({
    store: addItemReducer
});