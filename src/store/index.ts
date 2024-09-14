import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { thunk } from "redux-thunk";

// import reducer from "./reducer";
import numReducer from "./numReducer/reducer";
import arrReducer from "./arrReducer/reducer";
const reducers = combineReducers({
  numReducer,
  arrReducer,
});


// export default createStore(reducer);
// redux-thunk
export default createStore(reducers, applyMiddleware(thunk));
