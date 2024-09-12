const actions: {
  [key: string]: (
    newState: { num: number },
    action: { type: string; value: number }
  ) => void;
} = {
  ADD: (newState) => {
    newState.num++;
  },
  ADD2: (newState, action) => {
    newState.num += action.value;
  },
};

export default {
  state: { num: 20 },
  actions
};
