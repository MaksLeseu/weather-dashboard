import React from 'react';

export const CurrentWeatherCard = ({ currentWeather }) => {
    if (!currentWeather) {
        return;
    }

    return (
        <div style={{ marginTop: '50px', border: '1px solid black'  }}>
            <p>City: { currentWeather.city }</p>
            <p>Temp: { currentWeather.temp }°C</p>
            <p>Humidity: { currentWeather.humidity }%</p>
            <p>Speed: { currentWeather.windSpeed } m/s</p>
        </div>
    );
};
