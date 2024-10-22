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

            // Find the index of an existing city in the array of selected cities
            const existingCityIndex = state.cities.findIndex((item) => item === city);

            if (existingCityIndex !== NOT_FOUND_INDEX) {
                // Remove it from the array of selected cities
                state.cities = state.cities.filter((item) => item !== city);
            }  else {
                // If the city is not in the favorites, add it
                state.cities.push(city);
            }

            // Save the updated list of favorite cities to Local Storage
            saveToLocalStorage('favoriteCities', state.cities);
        },
    },
});

export const { toggleCityInFavorites } = favoriteCitiesSlice.actions;
export const favoritesCitiesReducer = favoriteCitiesSlice.reducer;