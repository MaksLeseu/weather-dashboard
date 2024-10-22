export const groupWeatherDataByDate = (forecastData) => {
    return forecastData.reduce((acc, item) => {
        if (!acc[item.date]) {
            acc[item.date] = {
                temperature: [],
                humidity: [],
                windSpeed: []
            };
        }
        acc[item.date].temperature.push(item.temperature);
        acc[item.date].humidity.push(item.humidity);
        acc[item.date].windSpeed.push(item.windSpeed);
        return acc;
    }, {});
};