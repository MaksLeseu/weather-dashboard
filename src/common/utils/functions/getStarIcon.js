import {checkCity} from "./checkCity";
import {ActiveStarIcon} from "../../assets/ActiveStarIcon/ActiveStarIcon";
import {StarIcon} from "../../assets/StarIcon/StarIcon";

/**
 * Function to get star icon depending on whether current city is favorite
 * @param {string} currentCity - Current city.
 * @param {Array} favoritesCities - Array of selected cities.
 */

export const getStarIcon = (currentCity, favoritesCities) => {
    const isCity = checkCity(currentCity, favoritesCities);

    return isCity ? <ActiveStarIcon /> : <StarIcon />;
};