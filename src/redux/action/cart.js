import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCart: (state, action) => {
      const id = action.payload.id;
      let find = state.find((item) => item.id === id);
      if (find) {
        return state.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    increament: (state, action) => {
      const id = action.payload.id;
      return state.map((item) => {
        return item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item;
      });
    },
    decrement: (state, action) => {
      const id = action.payload.id;
      return state.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    },
    deletecart: (state, action) => {
      const id = action.payload.id;
      return state.filter((item) => item.id !== id);
    },
    deleteAll: () => {
      return [];
    },
  },
});
const { reducer, actions } = cartSlice;
export const { addCart, increament, decrement, deletecart, deleteAll } =
  actions;
export default reducer;
