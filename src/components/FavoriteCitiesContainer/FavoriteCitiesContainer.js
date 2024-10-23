import {useDispatch, useSelector} from "react-redux";
import {favoriteCitySelector} from "../../store/favoriteCity/favoriteCity.selector";
import {FavoriteCity} from "./FavoriteCity/FavoriteCity";
import {Pagination} from "../../common/components/Pagination/Pagination";
import './styles.css';
import {FIRST_ELEMENT} from "../../common/constants/api";
import {useCurrentPageHandler} from "../../common/utils/hooks/useCurrentPageHandler";
import {fetchCurrentWeather, fetchFiveDaysWeather} from "../../store/weatherDashboard/weather.slice";

export const FavoriteCitiesContainer = () => {
    const dispatch = useDispatch();
    const favoritesCities = useSelector(favoriteCitySelector);

    const { currentPage, currentCities, totalPages, handleNextPage, handlePrevPage } =
        useCurrentPageHandler(favoritesCities.cities.length, favoritesCities);

    if (!favoritesCities.cities[FIRST_ELEMENT]) {
        return null;
    };

    // Function for handling a click on a city
    const handleClick = (lat, lon) => {
        dispatch(fetchCurrentWeather({lat, lon}));
        dispatch(fetchFiveDaysWeather({ lat, lon }));
    };

    return (
        <section>
            <h2 className={'favorites-city_title'}>Favorite cities</h2>
            <div className={'favorites-city'}>
                {currentCities.map(city => (
                    <FavoriteCity
                        key={city.name}
                        cityName={city.name}
                        onClick={() => handleClick(city.coord.lat, city.coord.lon)}
                    />
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
            />
        </section>
    );
};

