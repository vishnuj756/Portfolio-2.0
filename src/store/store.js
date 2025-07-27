import { configureStore } from "@reduxjs/toolkit";
import AddCartReducer from "./slice/slice";  // Import the reducer

const store = configureStore({
  reducer: {
    cart: AddCartReducer,  // Assign the reducer
  },
});

export default store;
