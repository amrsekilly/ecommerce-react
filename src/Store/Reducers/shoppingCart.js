import { INCREASE_COUNT } from "../Actions/shoppingCart";

const initialState = {
  count: 0,
};

export const shoppingCart = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};
