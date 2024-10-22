import '../styles.css';

export const FavoriteCity = ({ cityName, onClick }) => {
    return (
        <button key={cityName} className={'favorites_city_item'} onClick={onClick}>
            { cityName }
        </button>
    );
};