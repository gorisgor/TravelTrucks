import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamper } from "./operations";

const initialState = {
  items: [],
  loading: false,
  error: false,
};
const campersSlice = createSlice({
  name: "campers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        console.log("Fetched campers:", action.payload.items);
        state.items = action.payload.items;
        state.loading = false;
      })
      .addCase(fetchCampers.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(fetchCamper.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCamper.fulfilled, (state, action) => {
        const camper = action.payload;
        const existingCamperIndex = state.campers.findIndex(
          (c) => c.id === camper.id
        );

        if (existingCamperIndex !== -1) {
          state.campers[existingCamperIndex] = camper;
        } else {
          state.campers.push(camper);
        }
        state.loading = false;
      })
      .addCase(fetchCamper.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});


export default campersSlice.reducer;
