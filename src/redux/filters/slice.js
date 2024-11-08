import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        location: '',
        equipments:[],
        type:'',
    },
    reducers: {
        changeLocation (state, action){
            state.location = action.payload;
        },
        toggleEquipFilter(state, action) {
            const equipment = action.payload;
            if (state.equipments.includes(equipment)) {
              state.equipments = state.equipments.filter((item) => item !== equipment);
            } else {
              state.equipments.push(equipment);
            }
          },
    },
});

export default filtersSlice.reducer;
export const {changeLocation, toggleEquipFilter} = filtersSlice.actions;