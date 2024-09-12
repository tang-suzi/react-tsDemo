import { combineReducers, legacy_createStore as createStore } from "redux";
// import reducer from "./reducer";
import numReducer from "./numReducer/reducer";
import arrReducer from "./arrReducer/reducer";
const reducers = combineReducers({
  numReducer,
  arrReducer,
});

// export default createStore(reducer);
export default createStore(reducers);
