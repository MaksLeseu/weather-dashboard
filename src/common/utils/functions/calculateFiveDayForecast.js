import {temperatureInCelsius} from "./temperatureInCelsius";
import {FIRST_ELEMENT} from "../../constants/api";
import {DAYS, DECIMAL_PLACES} from "../../constants/functions";

export const calculateFiveDayForecast = (groupedByDate) => {
    const today = new Date().toISOString().split('T')[FIRST_ELEMENT]; // Current date in YYYY-MM-DD format
    return Object.keys(groupedByDate).filter(date => date > today)
        .slice(DAYS['START_INDEX'], DAYS['NUMBER_OF_DAYS'])
        .map(date => {
        const dataForDay = groupedByDate[date];

        const average = (arr) => arr.reduce((sum, value) => sum + value, 0) / arr.length;

        const temp = temperatureInCelsius(+average(dataForDay.temperature).toFixed(DECIMAL_PLACES['TWO']));
        return {
            date,
            temperature: temp,
            humidity: average(dataForDay.humidity).toFixed(DECIMAL_PLACES['TWO']),
            windSpeed: average(dataForDay.windSpeed).toFixed(DECIMAL_PLACES['TWO']),
        };
    });
};
