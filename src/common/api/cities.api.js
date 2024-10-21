import {instance} from "./common.api";
import {API} from "../constants/api";

export const citiesApi = {
    getCityDetails : (cityName) => {
        return instance.get(`${API['CITY']}?q=${cityName}&appid=${API['KEY']}`)
    },
};