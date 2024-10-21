import {useDispatch, useSelector} from "react-redux";
import {favoritesCitiesSelector} from "./favoritesCities.selector";
import {citiesThunk} from "../SearchBar/cities.slice";
import {useState} from "react";
import {FavoriteCity} from "./FavoriteCity/FavoriteCity";
import {Pagination} from "../../common/components/Pagination/Pagination";
import './FavoriteCitiesContainer.css';
import {CITIES_PER_PAGE} from "../../common/constants/common";
import {getCitiesForCurrentPage} from "../../common/utils/functions/getCitiesForCurrentPage";
import {FIRST_ELEMENT} from "../../common/constants/api";

export const FavoriteCitiesContainer = () => {
    const dispatch = useDispatch();
    const favoritesCities = useSelector(favoritesCitiesSelector);
    const [ currentPage, setCurrentPage ] = useState(1);

    if (!favoritesCities.cities[FIRST_ELEMENT]) {
        return;
    }

    const totalPages = Math.ceil(favoritesCities.cities.length / CITIES_PER_PAGE);
    const currentCities = getCitiesForCurrentPage(currentPage, favoritesCities);

    const handleClick = (cityName) => dispatch(citiesThunk.fetchCityDetails(cityName));


    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

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

