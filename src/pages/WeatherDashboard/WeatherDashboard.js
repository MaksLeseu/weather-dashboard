import {useDispatch, useSelector} from "react-redux";
import {currentWeatherSelector} from "./currentWeather.selector";
import {CurrentWeatherCard} from "../../common/components/CurrentWeatherCard/CurrentWeatherCard";
import {FIRST_ELEMENT} from "../../common/constants/api";
import {favoritesCitiesSelector} from "../FavoriteCitiesContainer/favoritesCities.selector";
import {toggleCityInFavorites} from "../FavoriteCitiesContainer/favoriteCities.slice";
import {Preloader} from "../../common/components/Preloader/Preloader";
import {appSelector} from "../../app/app.selector";
import {Error} from "../../common/components/Error/Error";

export const WeatherDashboard = () => {
    const dispatch = useDispatch();
    const currentWeather = useSelector(currentWeatherSelector);
    const favoritesCities = useSelector(favoritesCitiesSelector);
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
            <Error error={error} />
        </div>
    );
};
