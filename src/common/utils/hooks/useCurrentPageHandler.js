import {useState} from "react";
import {CITIES_PAGE} from "../../constants/common";
import {getCitiesForCurrentPage} from "../functions/getCitiesForCurrentPage";

/**
 * Hook to manage the current page and select cities based on its number.
 * @param {number} citiesLength - Total number of cities.
 * @param {Array} favoritesCities - Array of selected cities.
 * @returns {Object} - An object with the current page, cities, total number of pages and page switching handlers.
 */

export const useCurrentPageHandler = (citiesLength, favoritesCities) => {
    const [ currentPage, setCurrentPage ] = useState(CITIES_PAGE['DEFAULT_CURRENT_PAGE']);

    // Calculate the total number of pages based on the total number of cities and the number of cities per page
    const totalPages = Math.ceil(citiesLength / CITIES_PAGE['PER_PAGE']);

    // Get an array of cities that should be displayed on the current page
    const currentCities = getCitiesForCurrentPage(currentPage, favoritesCities);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > CITIES_PAGE['FIRST_PAGE']) {
            setCurrentPage(currentPage - 1);
        }
    };

    return {
        currentPage,
        currentCities,
        totalPages,
        handleNextPage,
        handlePrevPage,
    };
};