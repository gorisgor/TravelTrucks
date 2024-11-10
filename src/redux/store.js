import { configureStore, combineReducers } from "@reduxjs/toolkit";
import campersReducer from "./campers/slice.js";
import filtersReducer from "./filters/slice.js";

const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
  },
});

export default store;
