import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name:'loading',
    initialState: false,
    reducers: {
        showLoader: (state) => true,
        hideLoader: (state) => false
    },
});

export const { showLoader, hideLoader } = slice.actions;

export const loadingReducer = slice.reducer;