import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      const id = action.payload.id;
      const find = state.find((item) => item.id === id);

      if (find) {
        state.filter((item) => item.id !== id);
      } else {
        state.push(action.payload);
      }
    },
  },
});
const { reducer, actions } = favoriteSlice;
export const { addFavorite } = actions;

export default reducer;
