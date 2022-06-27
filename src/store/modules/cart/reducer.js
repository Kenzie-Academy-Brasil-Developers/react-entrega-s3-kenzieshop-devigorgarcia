import { SET_CART } from "./actionType";

const initialState = () => {
  const localCart = localStorage.getItem("cart");
  if (localCart) {
    return JSON.parse(localCart);
  } else {
    return [];
  }
};

export const cartReducer = (state = initialState(), { type, list }) => {
  switch (type) {
    case SET_CART:
      return list;

    default:
      return state;
  }
};
