import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCart: (state, action) => {
      state.push(action.payload);
    },
    deletecart: (state) => {
      return state.slice(0, 10);
    },
  },
});
const { reducer, actions } = cartSlice;
export const { addCart, deletecart } = actions;
export default reducer;
