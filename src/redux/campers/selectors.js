import { createSelector } from "@reduxjs/toolkit";
import { selectLocation, selectEquipments } from "../filters/selectors";

export const selectCampers = (state) => state.campers.items;
export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;
export const selectFavorite =(state)=> state.campers.favorites;

export const selectFilteredCampers = createSelector(
  [selectCampers, selectLocation, selectEquipments],
  (campers, location, equipments) => {
    const lowercasedLocation = location.toLowerCase();
    return campers.filter((camper) =>
      camper.location.toLowerCase().includes(lowercasedLocation) &&
      equipments.every((equipment) => camper[equipment] === true)
    );
  }
);
