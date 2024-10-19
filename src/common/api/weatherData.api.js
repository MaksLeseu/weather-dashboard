import {instance} from "./common.api";
import {API_KEY} from "../constants/api";

const WEATHER_API_KEY = 'data/2.5/weather';

export const weatherData = {
    getWeatherData: (lat, lon) => {
        debugger
        return instance.get(`${WEATHER_API_KEY}?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    }
};