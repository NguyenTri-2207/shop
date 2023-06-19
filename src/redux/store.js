import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./action/user";
import cartSlice from "./action/cart";
import favoriteSlice from "./action/favorite";
const rootReducer = {
  user: userSlice,
  cart: cartSlice,
  favorite: favoriteSlice,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
