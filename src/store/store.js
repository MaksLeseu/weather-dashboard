import {configureStore} from "@reduxjs/toolkit";
import {weatherSlice} from "./weatherDashboard/weather.slice";
import {favoritesCitiesReducer} from "./favoriteCity/app.slice";
import {appReducer} from "./app/slice";

export const store = configureStore({
    reducer: {
        weather: weatherSlice,
        favoritesCities: favoritesCitiesReducer,
        app: appReducer,
    }
});

window.store = store;