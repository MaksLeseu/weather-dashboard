import {CITIES_PER_PAGE} from "../../constants/common";

export const getCitiesForCurrentPage = (currentPage, favoritesCities) => {
    const indexOfLastCity = currentPage * CITIES_PER_PAGE;
    const indexOfFirstCity = indexOfLastCity - CITIES_PER_PAGE;
    return favoritesCities.cities.slice(indexOfFirstCity, indexOfLastCity);
};