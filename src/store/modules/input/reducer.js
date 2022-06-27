import { INPUT_PRODUCT } from "./actionsType"

const initialState = ""

export const inputReducer = (state = initialState, { type, input }) => {
  switch (type) {

  case INPUT_PRODUCT:
    return input

  default:
    return state
  }
}
