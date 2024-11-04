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
        camper.bodyType === filters.bodyType || filters.bodyType === "";
      const matchesEquipments = Object.keys(filters.equipments).every(
        (equipments) => {
          return (
            !filters.equipments[equipments] || camper.equipments[equipments]
          );
        }
      );

      return matchesLocation && matchesBodyType && matchesEquipments;
    });
  }
);
