import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {citiesApi} from "../../common/api/cities.api";
import {FIRST_ELEMENT} from "../../common/constants/api";
import {fetchCurrentWeather} from "../WeatherDashboard/weather.slice";

const slice = createSlice({
    name:'cities',
    initialState: [],
    reducers: {},
});

export const fetchCityDetails = createAsyncThunk(
    'city/getCity', async (cityName, { rejectWithValue, dispatch }) => {
        try {
            const res = await citiesApi.getCityDetails (cityName);

            if (res.data) {
                const lat = res.data[FIRST_ELEMENT].lat;
                const lon = res.data[FIRST_ELEMENT].lon;

                dispatch(fetchCurrentWeather({ lat, lon }));
            }
        } catch (error) {
            console.log(error);
            return rejectWithValue(null);
        }

    });

export const cityAction = slice.actions;
export const citiesSlice = slice.reducer;
export const citiesThunk = { fetchCityDetails };