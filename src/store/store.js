import {configureStore} from "@reduxjs/toolkit";
import {citySlice} from "../pages/SearchBar/searchBar.slice";

export const store = configureStore({
    reducer: {
        city: citySlice,
    }
});

window.store = store;