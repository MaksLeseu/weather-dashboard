/**
 * Groups weather data by date.
 * @param {Array} forecastData - An array of weather forecast objects, where each object contains a date, temperature, humidity, and wind speed.
 * @returns {Object} - An object where the keys are dates and the values are objects with arrays of temperatures, humidity, and wind speed.
 */

export const groupWeatherDataByDate = (forecastData) => {
    return forecastData.reduce((acc, item) => {
        if (!acc[item.date]) {
            acc[item.date] = {
                temperature: [],
                humidity: [],
                windSpeed: []
            };
        }

        // Add current values to the corresponding arrays
        acc[item.date].temperature.push(item.temperature);
        acc[item.date].humidity.push(item.humidity);
        acc[item.date].windSpeed.push(item.windSpeed);
        return acc;
    }, {});
};