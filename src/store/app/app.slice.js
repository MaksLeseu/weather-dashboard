import {createSlice} from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'app',
    initialState: {
        isFetching: false,
        error: null,
    },
    reducers: {
        showLoader: (state) => ({ ...state, isFetching: true }),
        hideLoader: (state) => ({ ...state, isFetching: false }),
        setAppError: (state, action) => {
            state.error = action.payload.error;
        },
    },
});

export const { showLoader, hideLoader, setAppError } = appSlice.actions;
export const appReducer = appSlice.reducer;