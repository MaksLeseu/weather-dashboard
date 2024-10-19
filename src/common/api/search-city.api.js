import {instance} from "./common.api";
import {API_KEY} from "../constants/api";

const CITY_API_KEY = 'geo/1.0/direct';

export const citiesApi = {
    getCity: (cityName) => {
        return instance.get(`${CITY_API_KEY}?q=${cityName}&appid=${API_KEY}`)
    }
};