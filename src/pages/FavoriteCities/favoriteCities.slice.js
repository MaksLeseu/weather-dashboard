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
        addCityToFavorites: (state, action) => {
            const city = action.payload;
            if (!state.cities.some((item) => item.id === city.id)) {
                state.cities.push(city);

                saveToLocalStorage('favoriteCities', JSON.stringify(state.cities))
            } else {
                console.log('City has been already added');
            }
        },
        removeCityFromFavorites: (state, action) => {
            const cityId = action.payload;
            state.cities = state.cities.filter((city) => city.id !== cityId);

            saveToLocalStorage('favoriteCities', JSON.stringify(state.cities))
        }
    },
});

export const { addCityToFavorites, removeCityFromFavorites } = slice.actions;
export const favoritesCitiesReducer = slice.reducer;