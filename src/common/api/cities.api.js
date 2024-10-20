import {instance} from "./common.api";
import {API_KEY, CITY_API} from "../constants/api";

export const citiesApi = {
    getCityDetails : (cityName) => {
        return instance.get(`${CITY_API}?q=${cityName}&appid=${API_KEY}`)
    }
};