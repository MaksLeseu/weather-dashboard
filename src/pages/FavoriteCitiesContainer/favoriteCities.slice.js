import {createSlice} from "@reduxjs/toolkit";
import {getStateFromLocalStorage} from "../../common/utils/functions/getStateFromLocalStorage";
import {saveToLocalStorage} from "../../common/utils/functions/saveToLocalStorage";

const savedCities = getStateFromLocalStorage('favoriteCities') || [];

const slice = createSlice({
    name: 'favoritesCities',
    initialState: {
        cities: savedCities,
    },
    reducers: {
        toggleCityInFavorites: (state, action) => {
            const city = action.payload;
            const existingCityIndex = state.cities.findIndex((item) => item === city);
            if (existingCityIndex !== -1) {
                state.cities = state.cities.filter((item) => item !== city);
                console.log(`City ${city} has been removed from favorites`);
            }  else {
                state.cities.push(city);
                console.log(`City ${city} has been added to favorites`);
            }
            saveToLocalStorage('favoriteCities', state.cities);
        },
    },
});

export const { toggleCityInFavorites } = slice.actions;
export const favoritesCitiesReducer = slice.reducer;