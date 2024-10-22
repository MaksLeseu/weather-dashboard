import {instance} from "./common.api";
import {API} from "../constants/api";

export const weatherData = {
    getCurrentWeatherData: (lat, lon) => {
        return instance.get(`${API['WEATHER']}?lat=${lat}&lon=${lon}&appid=${API['KEY']}`);
    },
    getFiveDayWeatherData: (lat, lon) => {
        return instance.get(`data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API['KEY']}`)
    },
};