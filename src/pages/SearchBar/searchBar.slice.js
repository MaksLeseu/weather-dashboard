import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {citiesApi} from "../../common/api/search-city.api";
import {weatherData} from "../../common/api/weatherData.api";

const FIRST_ELEMENT = 0;

const slice = createSlice({
    name:'searchBar',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            /*.addCase(fetchCity.fulfilled, (state, action) => {
                action.payload.cityData.forEach((city) => state.push(city));
            })*/
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.push(action.payload);
            })
    }
});

export const fetchCity = createAsyncThunk(
    'city/getCity', async (cityName, thunkAPI) => {
        const { rejectWithValue, dispatch } = thunkAPI;
        debugger
        try {
            const res = await citiesApi.getCity(cityName);

            if (res.data) {
                const lat = res.data[FIRST_ELEMENT].lat;
                const lon = res.data[FIRST_ELEMENT].lon;

                dispatch(fetchWeather({ lat, lon }));
            }
        } catch (error) {
            console.log(error);
            return rejectWithValue(null);
        }

    });

export const fetchWeather = createAsyncThunk(
    'weather/getWeather', async ({ lat, lon }, thunkAPI) => {
        const { rejectWithValue, dispatch } = thunkAPI;
            debugger
        try {
            const res = await weatherData.getWeatherData(lat, lon);

            if (res.data) {
                const weatherData = {
                    city: res.data.name,
                    temp: res.data.main.temp,
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

export const cityAction = slice.actions;
export const citySlice = slice.reducer;
export const cityThunk = { fetchCity, fetchWeather };