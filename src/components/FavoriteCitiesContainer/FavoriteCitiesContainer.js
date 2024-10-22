import {useDispatch, useSelector} from "react-redux";
import {favoriteCitySelector} from "../../store/favoriteCity/favoriteCity.selector";
import {citiesThunk} from "../../store/citiesThunk/cities.thunk";
import {FavoriteCity} from "./FavoriteCity/FavoriteCity";
import {Pagination} from "../../common/components/Pagination/Pagination";
import './styles.css';
import {FIRST_ELEMENT} from "../../common/constants/api";
import {useCurrentPageHandler} from "../../common/utils/hooks/useCurrentPageHandler";

export const FavoriteCitiesContainer = () => {
    const dispatch = useDispatch();
    const favoritesCities = useSelector(favoriteCitySelector);

    const { currentPage, currentCities, totalPages, handleNextPage, handlePrevPage } =
        useCurrentPageHandler(favoritesCities.cities.length, favoritesCities);

    if (!favoritesCities.cities[FIRST_ELEMENT]) {
        return null;
    }

    // Function for handling a click on a city
    const handleClick = (cityName) => dispatch(citiesThunk.fetchCityDetails(cityName));

    return (
        <section>
            <h2 className={'favorites-city_title'}>Favorite cities</h2>
            <div className={'favorites-city'}>
                {currentCities.map(city => (
                    <FavoriteCity
                        key={city}
                        cityName={city}
                        onClick={() => handleClick(city)}
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

