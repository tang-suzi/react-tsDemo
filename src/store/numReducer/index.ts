const actions: {
  [key: string]: (
    newState: { num: number },
    action: { type: string; value: number }
  ) => void;
} = {
  ADD: (newState) => {
    newState.num++;
  },
  //   ASYNC_ADD: (newState) => {
  //     newState.num++;
  //   },
  ADD2: (newState, action) => {
    newState.num += action.value;
  },
};
const asyncActions = {
  asyncAdd(dis: Function) {
    setTimeout(() => {
      dis({ type: "ADD" });
    }, 1000);
  },
};

export default {
  state: { num: 20 },
  actions,
  asyncActions,
};
