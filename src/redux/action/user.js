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

// import { createSlice } from "@reduxjs/toolkit";

// const NoteToggle = {
//   enableDeleteButton: false,
// };

// const toggleReducer = createSlice({
//   name: "login",
//   initialState: NoteToggle,
//   reducers: {
//     showLogin: (state) => {
//       const newToggle = { ...state, enableDeleteButton: true };
//       console.log("new toogle", newToggle);

//     },
//     showLogin11: (state) => {
//       const newToggle = { ...state, enableDeleteButton: false };
//       return newToggle;
//     },
//   },
// });
// export default toggleReducer.reducer;
// export const { showLogin } = toggleReducer.actions;