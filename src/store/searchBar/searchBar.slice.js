import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {citiesApi} from "../../common/api/cities.api";
import {FIRST_ELEMENT} from "../../common/constants/api";
import {fetchCurrentWeather, fetchFiveDaysWeather} from "../weatherDashboard/weather.slice";
import {showLoader} from "../app/slice";
import {handleServerError} from "../../common/utils/functions/handleServerError";

const searchBarSlice = createSlice({
    name:'cities',
    initialState: [],
    reducers: {},
});

export const fetchCityDetails = createAsyncThunk(
    'city/getCity', async (cityName, { rejectWithValue, dispatch }) => {
        dispatch(showLoader());
        try {
            const res = await citiesApi.getCityDetails (cityName);
            if (res.data) {
                const lat = res.data[FIRST_ELEMENT].lat;
                const lon = res.data[FIRST_ELEMENT].lon;

                dispatch(fetchCurrentWeather({ lat, lon }));
                dispatch(fetchFiveDaysWeather({ lat, lon }));
            }
        } catch (error) {
            handleServerError(error, dispatch, true);
            return rejectWithValue(error);
        }
    });

export const cityAction = searchBarSlice.actions;
export const citiesSlice = searchBarSlice.reducer;
export const citiesThunk = { fetchCityDetails };