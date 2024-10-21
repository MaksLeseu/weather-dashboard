import {checkCity} from "./checkCity";
import {ActiveStarIcon} from "../../assets/ActiveStarIcon/ActiveStarIcon";
import {StarIcon} from "../../assets/StarIcon/StarIcon";

export const getStarIcon = (currentCity, favoritesCities) => {
    const isCity = checkCity(currentCity, favoritesCities);

    return isCity ? <ActiveStarIcon /> : <StarIcon />;
};