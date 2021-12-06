import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./action/user";
import cartSlice from "./action/cart";
const rootReducer = {
  user: userSlice,
  cart: cartSlice,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
