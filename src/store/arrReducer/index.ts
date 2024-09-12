const actions: {
  [key: string]: (
    newState: { sarr: number[] },
    action: { type: string; value: number }
  ) => void;
} = {
  sarrPush: (
    newState: { sarr: number[] },
    action: { type: string; value: number }
  ) => {
    newState.sarr.push(action.value);
  },
};

export default {
  state: { sarr: [1, 2, 3, 4] },
  actions,
  sarrPush: "sarrPush",
};
