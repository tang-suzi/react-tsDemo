// const defaultState = {
//   num: 20,
// };
// const reducer = (
//   state = defaultState,
//   action: { type: string; value: number }
// ) => {
//   const newState = JSON.parse(JSON.stringify(state));
//   switch (action.type) {
//     case "ADD":
//       newState.num++;
//       break;
//     case "ADD2":
//       newState.num += action.value;
//       break;

//     default:
//       break;
//   }
//   return newState;
// };

// export default reducer;

// 未模块抽取
import numReducer from "./numReducer";
import arrReducer from "./arrReducer";

const defaultState = {
  ...numReducer.state,
  ...arrReducer.state,
};

const reducer = (
  state = defaultState,
  action: { type: string; value: number }
) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case numReducer.ADD:
      numReducer.actions[numReducer.ADD](newState, action);
      break;
    case numReducer.ADD2:
      numReducer.actions[numReducer.ADD](newState, action);
      break;
    case arrReducer.sarrPush:
      arrReducer.actions[arrReducer.sarrPush](newState, action);
      break;
    default:
      break;
  }
  return newState;
};

export default reducer;
