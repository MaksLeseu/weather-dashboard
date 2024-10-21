import {IconButton} from "../IconButton/IconButton";
import './CurrentWeatherCard.css';
import {WindIcon} from "../../assets/WindIcon/WindIcon";
import {HumidityIcon} from "../../assets/HumidityIcon/HumidityIcon";
import {formatDateTimeByTimezone} from "../../utils/functions/formatDateTimeByTimezone";
import {getWeatherIcon} from "../../utils/functions/getWeatherIcon";
import {getStarIcon} from "../../utils/functions/getStarIcon";

export const CurrentWeatherCard = ({ currentWeather, favoritesCities, handleAddToFavorites }) => {
    if (!currentWeather) {
        return;
    }

    const starIcon = getStarIcon(currentWeather.city, favoritesCities.cities);
    const date = formatDateTimeByTimezone(currentWeather.timezone);
    const weatherIcon = getWeatherIcon(currentWeather.icon);

    return (
        <div className={'weather_container'}>
            <div className={'weather_title_container'}>
                <p className={'weather_title_text'}>Weather in {currentWeather.city} now</p>
                <IconButton
                    icon={starIcon}
                    styles={{
                        width: '25px',
                        height: '25px',
                    }}
                    onClick={handleAddToFavorites}
                />
            </div>
            <p>{ date }</p>

            <div className={'weather_data_container'}>
                <div className={'weather_data_temp_container'}>
                    <div className={'weather_data_temp_icon'}>
                        <img src={weatherIcon} alt="weather icon" />
                    </div>
                    <p className={'weather_data_temp'}>{currentWeather.temp}°</p>
                </div>
                <div className={'weather_data_details_container'}>
                    <div className={'weather_data_details'}>
                        <div className={'weather_data_details_icon'}>
                            <HumidityIcon />
                        </div>
                        <p>Humidity: {currentWeather.humidity}%</p>
                    </div>
                    <div className={'weather_data_details'}>
                        <div className={'weather_data_details_icon'}>
                            <WindIcon />
                        </div>
                        <p>Wind: {currentWeather.windSpeed} m/s</p>
                    </div>
                    <div className={'weather_data_details_temp_container'}>
                        <p>Min temp: <span>{currentWeather.minTemp}°C</span></p>
                        <p>Max temp: <span>{currentWeather.maxTemp}°C</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};
