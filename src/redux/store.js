import { configureStore } from "@reduxjs/toolkit";
import campersReducer from "./campers/slice.js";

const store = configureStore({
  reducer: {
    campers: campersReducer,
  },
});

export default store;
