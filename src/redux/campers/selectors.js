import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = (state) => state.campers.campers;
export const selectFilters = (state) => state.campers.filters;
export const selectFavorites = (state) => state.campers.favorites;

export const selectFilteredCampers = createSelector(
  [selectCampers, selectFilters],
  (campers, filters) => {
    return campers.filter((camper) => {
      const matchesLocation = camper.location
        .toLowerCase()
        .includes(filters.location.toLowerCase());
      const matchesBodyType =
        camper.form === filters.bodyType || filters.bodyType === "";
      const matchesEquipments = Object.keys(filters.equipment).every(
        (equipment) => {
          return !filters.equipment[equipment] || camper[equipment];
        }
      );

      return matchesLocation && matchesBodyType && matchesEquipments;
    });
  }
);
