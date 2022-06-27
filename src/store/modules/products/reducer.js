import games from "../../../data/data.js";
import { SET_PRODUCTS } from "./actionType.js";

const initialState = games;

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;

    default:
      return state;
  }
};
