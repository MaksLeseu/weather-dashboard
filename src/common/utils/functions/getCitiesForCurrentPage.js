import {CITIES_PAGE} from "../../constants/common";

/**
 * Gets a list of cities for the current page based on the page number and an array of featured cities.
 */

export const getCitiesForCurrentPage = (currentPage, favoritesCities) => {
    const indexOfLastCity = currentPage * CITIES_PAGE['PER_PAGE'];
    const indexOfFirstCity = indexOfLastCity - CITIES_PAGE['PER_PAGE'];
    return favoritesCities.cities.slice(indexOfFirstCity, indexOfLastCity);
};