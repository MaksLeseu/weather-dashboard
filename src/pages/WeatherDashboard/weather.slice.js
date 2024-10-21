import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {weatherData} from "../../common/api/weather.api";
import {temperatureInCelsius} from "../../common/utils/functions/temperatureInCelsius";
import {FIRST_ELEMENT} from "../../common/constants/api";
import {hideLoader} from "../../app/loading.slice";

const slice = createSlice({
    name:'weather',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrentWeather.fulfilled, (state, action) => {
                return [action.payload];
            })
    }
});

export const fetchCurrentWeather = createAsyncThunk(
    'weather/getWeather', async ({ lat, lon }, { rejectWithValue, dispatch }) => {
        try {
            const res = await weatherData.getCurrentWeatherData(lat, lon);

            if (res.data) {
                const temp = temperatureInCelsius(res.data.main.temp);
                const maxTemp = temperatureInCelsius(res.data.main.temp_max);
                const minTemp = temperatureInCelsius(res.data.main.temp_min);

                const weatherData = {
                    city: res.data.name,
                    temp,
                    maxTemp,
                    minTemp,
                    humidity: res.data.main.humidity,
                    windSpeed: res.data.wind.speed,
                    timezone: res.data.timezone,
                    icon: res.data.weather[FIRST_ELEMENT].icon,
                };
                dispatch(hideLoader());
                return weatherData;
            }
        } catch (error) {
            console.log(error);
            dispatch(hideLoader());
            return rejectWithValue('Error fetching weather data');
        }
    }
);

export const weatherAction = slice.actions;
export const weatherSlice = slice.reducer;
export const weatherThunk = { fetchCurrentWeather };