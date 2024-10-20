import {instance} from "./common.api";
import {API_KEY, WEATHER_API} from "../constants/api";

export const weatherData = {
    getCurrentWeatherData: (lat, lon) => {
        return instance.get(`${WEATHER_API}?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    },
    getFiveDayWeatherData: () => {

    },
};