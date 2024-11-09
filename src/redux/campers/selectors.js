import { createSelector } from "@reduxjs/toolkit";
import {
  selectLocation,
  selectEquipments,
  selectType,
} from "../filters/selectors";

export const selectCampers = (state) => state.campers.items;
export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;
export const selectFavorite = (state) => state.campers.favorites;
export const selectCamper = (state) => state.campers.camper;

export const selectFilteredCampers = createSelector(
  [selectCampers, selectLocation, selectEquipments, selectType],
  (campers, location, equipments, type) => {
    const lowercasedLocation = location.toLowerCase();

    return campers.filter((camper) => {
      const locationMatch = camper.location
        .toLowerCase()
        .includes(lowercasedLocation);
      const equipmentMatch = equipments.every((equipment) => {
        if (equipment === "transmission") {
          return (
            camper.transmission &&
            camper.transmission.toLowerCase() === "automatic"
          );
        }

        return camper.hasOwnProperty(equipment) && camper[equipment] === true;
      });
      const typeMatch = type
        ? camper.form.toLowerCase() === type.toLowerCase()
        : true;

      return locationMatch && equipmentMatch && typeMatch;
    });
  }
);
