import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {weatherData} from "../../common/api/weather.api";
import {temperatureInCelsius} from "../../common/utils/functions/temperatureInCelsius";

const slice = createSlice({
    name:'weather',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrentWeather.fulfilled, (state, action) => {
                state.push(action.payload);
            })
    }
});

export const fetchCurrentWeather = createAsyncThunk(
    'weather/getWeather', async ({ lat, lon }, { rejectWithValue, dispatch }) => {
        try {
            const res = await weatherData.getCurrentWeatherData(lat, lon);

            if (res.data) {
                const temp = temperatureInCelsius(res.data.main.temp);

                const weatherData = {
                    city: res.data.name,
                    temp,
                    humidity: res.data.main.humidity,
                    windSpeed: res.data.wind.speed,
                };
                return weatherData;
            }
        } catch (error) {
            console.log(error);
            return rejectWithValue('Error fetching weather data');
        }
    }
);

export const weatherAction = slice.actions;
export const weatherSlice = slice.reducer;
export const weatherThunk = { fetchCurrentWeather };