import {CITIES_PAGE} from "../../constants/common";


export const getCitiesForCurrentPage = (currentPage, favoritesCities) => {
    const indexOfLastCity = currentPage * CITIES_PAGE['PER_PAGE'];
    const indexOfFirstCity = indexOfLastCity - CITIES_PAGE['PER_PAGE'];
    return favoritesCities.cities.slice(indexOfFirstCity, indexOfLastCity);
};