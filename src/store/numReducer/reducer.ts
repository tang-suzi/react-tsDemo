import numReducer from "./index";

const reducer = (
  state = {
    ...numReducer.state,
  },
  action: { type: string; value: number }
) => {
  const newState = JSON.parse(JSON.stringify(state));
  // switch (action.type) {
  //   case numReducer.ADD:
  //     numReducer.actions[numReducer.ADD](newState, action);
  //     break;
  //   case numReducer.ADD2:
  //     numReducer.actions[numReducer.ADD](newState, action);
  //     break;
  //   default:
  //     break;
  // }
  for (const key in numReducer.actions) {
    if (action.type === key) {
      numReducer.actions[action.type](newState, action);
      break;
    }
  }
  return newState;
};

export default reducer;
