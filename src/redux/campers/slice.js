import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamper } from "./operations";

const initialState = {
  campers: [],
  filters: {
    location: "",
    bodyType: "",
    equipment: {
      AC: false,
      kitchen: false,
      TV: false,
      radio: false,
      refrigerator: false,
      microwave: false,
      gas: false,
      water: false,
      bathroom: false,
    },
  },
  loading: false,
  error: false,
  favorites: [],
};
const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    setFilters(state, action) {
      state.filters = action.payload;
    },
    clearCampers(state) {
      state.campers = [];
    },
    addFavorite(state, action) {
      state.favorites.push(action.payload);
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        console.log("Fetched campers:", action.payload.items);
        state.campers = action.payload.items;
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

export const { setFilters, clearCampers, addFavorite, removeFavorite } =
  campersSlice.actions;
export default campersSlice.reducer;
