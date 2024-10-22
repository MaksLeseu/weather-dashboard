import {instance} from "./common.api";
import {API} from "../constants/api";

export const weatherData = {
    getCurrentWeatherData: (lat, lon) => {
        return instance.get(`${API['WEATHER']}/weather?lat=${lat}&lon=${lon}&appid=${API['KEY']}`);
    },
    getFiveDayWeatherData: (lat, lon) => {
        return instance.get(`${API['WEATHER']}/forecast?lat=${lat}&lon=${lon}&appid=${API['KEY']}`)
    },
};