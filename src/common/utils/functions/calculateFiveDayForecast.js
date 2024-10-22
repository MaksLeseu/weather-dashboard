import {temperatureInCelsius} from "./temperatureInCelsius";
import {FIRST_ELEMENT} from "../../constants/api";
import {DAYS, DECIMAL_PLACES} from "../../constants/functions";

/**
 * Calculates a five-day weather forecast based on data grouped by date
 * @param {Object} groupedByDate - An object in which the keys are dates and the values are arrays of weather data.
 * @returns {Array} - An array of objects with weather forecasts for the next five days.
 */

export const calculateFiveDayForecast = (groupedByDate) => {
    const today = new Date().toISOString().split('T')[FIRST_ELEMENT]; // Current date in YYYY-MM-DD format

    // Filter dates, leaving only future ones, cut to get 5 days and process them
    return Object.keys(groupedByDate).filter(date => date > today)
        .slice(DAYS['START_INDEX'], DAYS['NUMBER_OF_DAYS'])
        .map(date => {
        const dataForDay = groupedByDate[date];

        // Function to calculate the average value of an array
        const average = (arr) => arr.reduce((sum, value) => sum + value, 0) / arr.length;

        // Calculate the average temperature in degrees Celsius and round to two decimal places
        const temp = temperatureInCelsius(+average(dataForDay.temperature).toFixed(DECIMAL_PLACES['TWO']));
        return {
            date,
            temperature: temp,
            humidity: average(dataForDay.humidity).toFixed(DECIMAL_PLACES['TWO']),
            windSpeed: average(dataForDay.windSpeed).toFixed(DECIMAL_PLACES['TWO']),
        };
    });
};
