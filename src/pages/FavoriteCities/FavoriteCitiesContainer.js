import {useSelector} from "react-redux";
import {favoritesCitiesSelector} from "./favoritesCities.selector";

export const FavoriteCitiesContainer = () => {
    const favoritesCities = useSelector(favoritesCitiesSelector);

    if (!favoritesCities) {
        return;
    }

    console.log(favoritesCities)
    return (
        <div>
            {
                favoritesCities.cities.map(city => (
                    <p onClick={() => alert(city)}>{ city }</p>
                ))
            }
        </div>
    );
};

