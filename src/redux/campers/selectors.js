import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";

export const selectCampers = (state) => state.campers.items;
export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;
export const selectFavorite =(state)=> state.campers.favorites;

export const selectFilteredCampers = createSelector(
  [selectCampers, selectFilter],
  (campers, filter) => {
    const lowercasedFilter = filter.toLowerCase();
    return campers.filter(camper=> camper.location.toLowerCase().includes(lowercasedFilter))
  }
);
