import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {citiesApi} from "../../common/api/cities.api";
import {FIRST_ELEMENT} from "../../common/constants/api";
import {fetchCurrentWeather} from "../WeatherDashboard/weather.slice";
import {hideLoader, showLoader} from "../../app/app.slice";
import {handleServerError} from "../../common/utils/functions/handleServerError";

const slice = createSlice({
    name:'cities',
    initialState: [],
    reducers: {},
});

export const fetchCityDetails = createAsyncThunk(
    'city/getCity', async (cityName, { rejectWithValue, dispatch }) => {
        dispatch(showLoader());
        try {
            const res = await citiesApi.getCityDetails (cityName);
            console.log(res)
            if (res.data) {
                const lat = res.data[FIRST_ELEMENT].lat;
                const lon = res.data[FIRST_ELEMENT].lon;

                dispatch(fetchCurrentWeather({ lat, lon }));
            }
        } catch (error) {
            handleServerError(error, dispatch, true);
            return rejectWithValue(error);
        }
    });

export const cityAction = slice.actions;
export const citiesSlice = slice.reducer;
export const citiesThunk = { fetchCityDetails };