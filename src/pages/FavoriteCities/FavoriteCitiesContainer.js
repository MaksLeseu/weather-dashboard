import {useDispatch, useSelector} from "react-redux";
import {favoritesCitiesSelector} from "./favoritesCities.selector";
import {citiesThunk} from "../SearchBar/cities.slice";

export const FavoriteCitiesContainer = () => {
    const dispatch = useDispatch();
    const favoritesCities = useSelector(favoritesCitiesSelector);

    if (!favoritesCities) {
        return;
    }

    const handleClick = (cityName) => dispatch(citiesThunk.fetchCityDetails(cityName));

    return (
        <div>
            {
                favoritesCities.cities.map(city => (
                    <p onClick={() => handleClick(city)}>{ city }</p>
                ))
            }
        </div>
    );
};

