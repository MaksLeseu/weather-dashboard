import {configureStore} from "@reduxjs/toolkit";
import {weatherSlice} from "./weatherDashboard/weather.slice";
import {favoritesCitiesReducer} from "./favoriteCity/favoriteCities.slice";
import {appReducer} from "./app/app.slice";
import {loadingMiddleware} from "../common/utils/functions/loadingMiddleware";

export const store = configureStore({
    reducer: {
        weather: weatherSlice,
        favoritesCities: favoritesCitiesReducer,
        app: appReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(loadingMiddleware),
});