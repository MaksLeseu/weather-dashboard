import React from 'react';
import {IconButton} from "../IconButton/IconButton";
import {useDispatch} from "react-redux";
import {addCityToFavorites} from "../../../pages/FavoriteCities/favoriteCities.slice";

export const CurrentWeatherCard = ({ currentWeather }) => {
    const dispatch = useDispatch();

    if (!currentWeather) {
        return;
    }
    const img = 'https://media.istockphoto.com/id/1161026114/vector/white-star-vector-icon-star-icon-vector-star-icon-star-vector-icon.jpg?s=612x612&w=0&k=20&c=27EhA42whW1U0E2d32rpelHNWQw3Ro7gFudmtCt7q9w=';

    const handleAddToFavorites = () => {
        dispatch(addCityToFavorites(currentWeather.city));
    };

    return (
        <div style={{ marginTop: '50px', border: '1px solid black'  }}>
            <p>City: { currentWeather.city }</p>
            <IconButton
                src={img}
                styles={{
                    width: '50px',
                    height: '50px',
                }}
                onClick={handleAddToFavorites}
            />
            <p>Temp: { currentWeather.temp }°C</p>
            <p>Humidity: { currentWeather.humidity }%</p>
            <p>Speed: { currentWeather.windSpeed } m/s</p>
        </div>
    );
};
