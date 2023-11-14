import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import LocationReducer from "./reducer";

// Create a Redux store with the LocationReducer as the root reducer
// and apply the thunk middleware for handling asynchronous actions
export const store = legacy_createStore(LocationReducer, applyMiddleware(thunk));
