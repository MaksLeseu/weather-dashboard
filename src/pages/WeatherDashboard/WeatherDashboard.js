import React from 'react';
import {useSelector} from "react-redux";
import {currentWeatherSelector} from "./currentWeather.selector";
import {CurrentWeatherCard} from "../../common/components/CurrentWeatherCard/CurrentWeatherCard";
import {FIRST_ELEMENT} from "../../common/constants/api";

export const WeatherDashboard = () => {
    const currentWeather = useSelector(currentWeatherSelector);

    return (
        <div>
            <CurrentWeatherCard
                currentWeather={currentWeather[FIRST_ELEMENT]}
            />
        </div>
    );
};
