/**
 * Function to check if a city is in the list of favorite cities
 * @param {string} cityName - Name of the city to be checked.
 * @param {Array} favoritesCities - Array of selected cities.
 * @returns {string|null} - Returns the name of the city if it is found in the favorites, or null if the city is not found or the input data is invalid.
 */

export const checkCity = (cityName, favoritesCities) => {
    if (!cityName || !favoritesCities || !Array.isArray(favoritesCities)) {
        return null;
    }

    return favoritesCities.find(city => city === cityName);
};