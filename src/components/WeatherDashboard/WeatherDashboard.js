import {useDispatch, useSelector} from "react-redux";
import {CurrentWeatherCard} from "../../common/components/CurrentWeatherCard/CurrentWeatherCard";
import {FIRST_ELEMENT} from "../../common/constants/api";
import {favoriteCitySelector} from "../../store/favoriteCity/favoriteCity.selector";
import {toggleCityInFavorites} from "../../store/favoriteCity/app.slice";
import {Preloader} from "../../common/components/Preloader/Preloader";
import {appSelector} from "../../store/app/app.selector";
import {Error} from "../../common/components/Error/Error";
import {weatherSelector} from "../../store/weatherDashboard/weather.selector";
import {FiveDaysWeatherCard} from "../../common/components/FiveDaysWeatherCard/FiveDaysWeatherCard";

export const WeatherDashboard = () => {
    const dispatch = useDispatch();
    const currentWeather = useSelector(weatherSelector).currentWeather;
    const fiveDaysWeather = useSelector(weatherSelector).fiveDaysWeather;
    const favoritesCities = useSelector(favoriteCitySelector);
    const loading = useSelector(appSelector).loading;
    const error = useSelector(appSelector).error;

    if (loading) {
        return <Preloader />;
    }

    const handleAddToFavorites = () => dispatch(toggleCityInFavorites(currentWeather[FIRST_ELEMENT].city));

    return (
        <div>
            <CurrentWeatherCard
                currentWeather={currentWeather[FIRST_ELEMENT]}
                favoritesCities={favoritesCities}
                handleAddToFavorites={handleAddToFavorites}
            />
            <FiveDaysWeatherCard
                fiveDaysWeather={fiveDaysWeather}
            />
            <Error error={error} />
        </div>
    );
};
