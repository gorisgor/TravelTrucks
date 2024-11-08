import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamper } from "./operations";

const initialState = {
  items: [],
  favorites: [],
  loading: false,
  error: false,
};
const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const camper = action.payload;
      if (!state.favorites.some((fav) => fav.id === camper.id)) {
        state.favorites.push(camper);
      }
    },
    removeFromFavorites: (state, action) => {
      const camperId = action.payload;
      state.favorites = state.favorites.filter((fav) => fav.id !== camperId);
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
        const items = action.payload;
        const existingCamperIndex = state.campers.findIndex(
          (c) => c.id === camper.id
        );

        if (existingCamperIndex !== -1) {
          state.items[existingCamperIndex] = camper;
        } else {
          state.items.push(camper);
        }
        state.loading = false;
      })
      .addCase(fetchCamper.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { addToFavorites, removeFromFavorites } = campersSlice.actions;
export default campersSlice.reducer;
