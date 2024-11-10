import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamper } from "./operations";

const initialState = {
  items: [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  camper: {},
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
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    removeFromFavorites: (state, action) => {
      const camperId = action.payload;
      state.favorites = state.favorites.filter((fav) => fav.id !== camperId);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
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
        state.camper = action.payload;
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
