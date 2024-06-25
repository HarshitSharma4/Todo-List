import { configureStore } from "@reduxjs/toolkit";
import tasklist from "./tasklist";
export const store = configureStore({
  reducer: { tasks:tasklist },
});
