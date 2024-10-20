import {configureStore} from "@reduxjs/toolkit";
import {weatherSlice} from "../pages/WeatherDashboard/weather.slice";

export const store = configureStore({
    reducer: {
        currentWeather: weatherSlice,
        fiveDayWeather: undefined,
    }
});

window.store = store;