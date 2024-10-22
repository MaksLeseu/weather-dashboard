import {configureStore} from "@reduxjs/toolkit";
import {weatherSlice} from "./weatherDashboard/weather.slice";
import {favoritesCitiesReducer} from "./favoriteCity/favoriteCities.slice";
import {appReducer} from "./app/app.slice";

export const store = configureStore({
    reducer: {
        weather: weatherSlice,
        favoritesCities: favoritesCitiesReducer,
        app: appReducer,
    }
});

window.store = store;