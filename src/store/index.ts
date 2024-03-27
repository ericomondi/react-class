import { createStore, combineReducers } from "redux";
import authReducer from "./reducer";

// Define your root reducer
const rootReducer = combineReducers({
  auth: authReducer
});

// Create the Redux store with the root reducer
const store = createStore(rootReducer,);

export default store;
