import { SET_PRODUCTS } from "./actionType";

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  products,
})