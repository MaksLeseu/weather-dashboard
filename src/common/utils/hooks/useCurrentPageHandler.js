import {useState} from "react";
import {CITIES_PAGE} from "../../constants/common";
import {getCitiesForCurrentPage} from "../functions/getCitiesForCurrentPage";

export const useCurrentPageHandler = (citiesLength, favoritesCities) => {
    const [ currentPage, setCurrentPage ] = useState(CITIES_PAGE['DEFAULT_CURRENT_PAGE']);

    const totalPages = Math.ceil(citiesLength / CITIES_PAGE['PER_PAGE']);
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