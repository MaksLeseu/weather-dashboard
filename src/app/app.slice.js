import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
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

export const { showLoader, hideLoader, setAppError } = slice.actions;
export const appReducer = slice.reducer;