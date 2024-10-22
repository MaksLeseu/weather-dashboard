import {createSlice} from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'app',
    initialState: {
        loading: false,
        error: null,
    },
    reducers: {
        showLoader: (state) => ({ ...state, loading: true }),
        hideLoader: (state) => ({ ...state, loading: false }),
        setAppError: (state, action) => {
            state.error = action.payload.error;
        },
    },
});

export const { showLoader, hideLoader, setAppError } = appSlice.actions;
export const appReducer = appSlice.reducer;