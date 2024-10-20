import {useDispatch, useSelector} from "react-redux";
import {favoritesCitiesSelector} from "./favoritesCities.selector";
import {citiesThunk} from "../SearchBar/cities.slice";
import {FavoriteCity} from "./FavoriteCity/FavoriteCity";
import {Pagination} from "../../common/components/Pagination/Pagination";
import './FavoriteCitiesContainer.css';
import {FIRST_ELEMENT} from "../../common/constants/api";
import {useCurrentPageHandler} from "../../common/utils/hooks/useCurrentPageHandler";

export const FavoriteCitiesContainer = () => {
    const dispatch = useDispatch();
    const favoritesCities = useSelector(favoritesCitiesSelector);

    const { currentPage, currentCities, totalPages, handleNextPage, handlePrevPage } =
        useCurrentPageHandler(favoritesCities.cities.length, favoritesCities);

    if (!favoritesCities.cities[FIRST_ELEMENT]) {
        return;
    }

    const handleClick = (cityName) => dispatch(citiesThunk.fetchCityDetails(cityName));

    return (
        <div>
            <p className={'favorites-city_title'}>Favorite cities</p>
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
        </div>
    );
};

