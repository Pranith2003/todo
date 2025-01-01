import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../redux/slices/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
  devTools: process.env.NODE_ENV !== 'production', 
});
