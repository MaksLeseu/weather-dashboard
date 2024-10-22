import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {weatherData} from "../../common/api/weather.api";
import {temperatureInCelsius} from "../../common/utils/functions/temperatureInCelsius";
import {FIRST_ELEMENT} from "../../common/constants/api";
import {hideLoader} from "../app/app.slice";
import {handleServerError} from "../../common/utils/functions/handleServerError";
import {groupWeatherDataByDate} from "../../common/utils/functions/groupWeatherDataByDate";
import {calculateFiveDayForecast} from "../../common/utils/functions/calculateFiveDayForecast";

const weatherBarSlice = createSlice({
    name:'weather',
    initialState: {
        currentWeather: [],
        fiveDaysWeather: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrentWeather.fulfilled, (state, action) => {
                return { ...state, currentWeather: [action.payload] }
            })
            .addCase(fetchFiveDaysWeather.fulfilled, (state, action) => {
                return { ...state, fiveDaysWeather: action.payload }
            })
    }
});

export const fetchCurrentWeather = createAsyncThunk(
    'weather/getWeather', async ({ lat, lon }, { dispatch }) => {
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
            handleServerError(error, dispatch, true);
        }
    }
);

export const fetchFiveDaysWeather = createAsyncThunk(
    'weather/getFiveDaysWeather', async ({ lat, lon }, { dispatch }) => {
        try {
            const res = await weatherData.getFiveDayWeatherData(lat, lon);

            if (res.data) {
                const forecastData = res.data.list.map(item => ({
                    date: item.dt_txt.split(' ')[FIRST_ELEMENT],
                    temperature: item.main.temp,
                    humidity: item.main.humidity,
                    windSpeed: item.wind.speed
                }));

                const groupedByDate = groupWeatherDataByDate(forecastData);
                const fiveDayForecast = calculateFiveDayForecast(groupedByDate);

                dispatch(hideLoader());
                return fiveDayForecast;
            }

        } catch (error) {
            handleServerError(error, dispatch, true);
        }
    }
);

export const weatherSlice = weatherBarSlice.reducer;
export const weatherThunk = { fetchCurrentWeather, fetchFiveDaysWeather };