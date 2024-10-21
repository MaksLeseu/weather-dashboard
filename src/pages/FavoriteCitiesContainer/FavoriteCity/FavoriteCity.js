import '../FavoriteCitiesContainer.css';

export const FavoriteCity = ({ cityName, onClick }) => {
    return (
        <div key={cityName} className={'favorites_city_item'} onClick={onClick}>
            { cityName }
        </div>
    );
};