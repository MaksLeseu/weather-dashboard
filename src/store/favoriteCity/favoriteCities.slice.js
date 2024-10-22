import {createSlice} from "@reduxjs/toolkit";
import {getStateFromLocalStorage} from "../../common/utils/functions/getStateFromLocalStorage";
import {saveToLocalStorage} from "../../common/utils/functions/saveToLocalStorage";
import {NOT_FOUND_INDEX} from "../../common/constants/api";

const savedCities = getStateFromLocalStorage('favoriteCities') || [];

const favoriteCitiesSlice = createSlice({
    name: 'favoritesCities',
    initialState: {
        cities: savedCities,
    },
    reducers: {
        toggleCityInFavorites: (state, action) => {
            const city = action.payload;
            const existingCityIndex = state.cities.findIndex((item) => item === city);
            if (existingCityIndex !== NOT_FOUND_INDEX) {
                state.cities = state.cities.filter((item) => item !== city);
            }  else {
                state.cities.push(city);
            }
            saveToLocalStorage('favoriteCities', state.cities);
        },
    },
});

export const { toggleCityInFavorites } = favoriteCitiesSlice.actions;
export const favoritesCitiesReducer = favoriteCitiesSlice.reducer;