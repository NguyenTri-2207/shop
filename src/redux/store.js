import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./action/user";
const rootReducer = {
  user: userSlice,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
