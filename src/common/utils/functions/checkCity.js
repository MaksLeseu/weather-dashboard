export const checkCity = (cityName, favoritesCities) => {
    if (!cityName || !favoritesCities || !Array.isArray(favoritesCities)) {
        return null;
    }

    return favoritesCities.find(city => city === cityName);
};