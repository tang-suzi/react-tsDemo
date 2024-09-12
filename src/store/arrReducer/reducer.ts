import arrReducer from "./index";


const reducer = (
    state = {
        ...arrReducer.state
    },
    action: { type: string; value: number }
  ) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
      case arrReducer.sarrPush:
        arrReducer.actions[arrReducer.sarrPush](newState, action);
        break;
      default:
        break;
    }
    return newState;
  };

  export default reducer