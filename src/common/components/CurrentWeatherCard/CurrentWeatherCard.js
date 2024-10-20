import React from 'react';
import {IconButton} from "../IconButton/IconButton";
import {useDispatch, useSelector} from "react-redux";
import {toggleCityInFavorites} from "../../../pages/FavoriteCities/favoriteCities.slice";
import {ActiveStarIcon} from "../../assets/ActiveStarIcon/ActiveStarIcon";
import {StarIcon} from "../../assets/StarIcon/StarIcon";
import {favoritesCitiesSelector} from "../../../pages/FavoriteCities/favoritesCities.selector";
import {checkCity} from "../../utils/functions/checkCity";
import './CurrentWeatherCard.css';
import {CloudsIcon} from "../../assets/CloudsIcon/CloudsIcon";

export const CurrentWeatherCard = ({ currentWeather }) => {
    const dispatch = useDispatch();
    const favoritesCities = useSelector(favoritesCitiesSelector);

    if (!currentWeather) {
        return;
    }

    const handleAddToFavorites = () => {
        dispatch(toggleCityInFavorites(currentWeather.city));
    };

    const isCity = checkCity(currentWeather.city, favoritesCities.cities);

    return (
        <div className={'weather_container'}>
            <div className={'weather_title_container'}>
                <p className={'weather_title_text'}>Weather in {currentWeather.city} now</p>
                <IconButton
                    icon={isCity ? <ActiveStarIcon/> : <StarIcon/>}
                    styles={{
                        width: '25px',
                        height: '25px',
                    }}
                    onClick={handleAddToFavorites}
                />
            </div>
            <p>Воскресенье, 20 октября, 20:42</p>

            <div className={'weather_data_container'}>
                <div className={'weather_data_temp_container'}>
                    <div className={'weather_data_temp_icon'}>
                        <CloudsIcon/>
                    </div>
                    <p className={'weather_data_temp'}>{currentWeather.temp}°</p>
                </div>
                <div className={'weather_data_details_container'}>
                    <div className={'weather_data_details'}>
                        <span>icon</span>
                        <p>humidity: {currentWeather.humidity}%</p>
                    </div>
                    <div className={'weather_data_details'}>
                        <span>icon</span>
                        <p>wind {currentWeather.windSpeed} m/s</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
