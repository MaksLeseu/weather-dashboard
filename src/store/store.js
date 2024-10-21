import {configureStore} from "@reduxjs/toolkit";
import {weatherSlice} from "../pages/WeatherDashboard/weather.slice";
import {favoritesCitiesReducer} from "../pages/FavoriteCitiesContainer/favoriteCities.slice";
import {loadingReducer} from "../app/loading.slice";

export const store = configureStore({
    reducer: {
        currentWeather: weatherSlice,
        fiveDayWeather: undefined,
        favoritesCities: favoritesCitiesReducer,
        loading: loadingReducer,
    }
});

window.store = store;