import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state) => {
      return state.slice(0, 10);
    },
  },
});
const { reducer, actions } = userSlice;
export const { addUser, deleteUser } = actions;
export default reducer;
