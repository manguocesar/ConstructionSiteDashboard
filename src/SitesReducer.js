export const SitesReducer = (state, action) => {
  let stateList = state.stateList;

  switch (action.type) {
    case "ADD_TRUE":
      const nextStateList = stateList.map((s) => {
        if (s.order === action.order) {
          return { ...s, selected: true };
        } else {
          return { ...s, selected: false };
        }
      });

      return { stateList: nextStateList };

    default:
      return state;
  }
};
