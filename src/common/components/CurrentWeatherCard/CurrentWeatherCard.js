import {IconButton} from "../IconButton/IconButton";
import {useDispatch, useSelector} from "react-redux";
import {toggleCityInFavorites} from "../../../pages/FavoriteCities/favoriteCities.slice";
import {ActiveStarIcon} from "../../assets/ActiveStarIcon/ActiveStarIcon";
import {StarIcon} from "../../assets/StarIcon/StarIcon";
import {favoritesCitiesSelector} from "../../../pages/FavoriteCities/favoritesCities.selector";
import {checkCity} from "../../utils/functions/checkCity";
import './CurrentWeatherCard.css';
import {WindIcon} from "../../assets/WindIcon/WindIcon";
import {HumidityIcon} from "../../assets/HumidityIcon/HumidityIcon";
import {formatDateTimeByTimezone} from "../../utils/functions/formatDateTimeByTimezone";

export const CurrentWeatherCard = ({ currentWeather }) => {
    const dispatch = useDispatch();
    const favoritesCities = useSelector(favoritesCitiesSelector);

    if (!currentWeather) {
        return;
    }

    const handleAddToFavorites = () => {
        dispatch(toggleCityInFavorites(currentWeather.city));
    };
    const date = formatDateTimeByTimezone(currentWeather.timezone)

    const isCity = checkCity(currentWeather.city, favoritesCities.cities);

    return (
        <div className={'weather_container'}>
            <div className={'weather_title_container'}>
                <p className={'weather_title_text'}>Weather in {currentWeather.city} now</p>
                <IconButton
                    icon={isCity ? <ActiveStarIcon /> : <StarIcon />}
                    styles={{
                        width: '25px',
                        height: '25px',
                    }}
                    onClick={handleAddToFavorites}
                />
            </div>
            <p>{date}</p>

            <div className={'weather_data_container'}>
                <div className={'weather_data_temp_container'}>
                    <div className={'weather_data_temp_icon'}>
                        <img src={`http://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`} alt="weather icon" />
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
