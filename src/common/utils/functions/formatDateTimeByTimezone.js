import {DAYS_OF_WEEK, MONTHS_OF_YEAR} from "../../constants/common";

/**
 * Formats date and time depending on time zone
 * @param {number} timezoneOffset - Time zone offset in seconds from UTC.
 * @returns {string} - A string representing a formatted date and time.
 */

export const formatDateTimeByTimezone = (timezoneOffset) => {
    const date = new Date();

    // Convert time zone offset from seconds to milliseconds
    const userTimezoneOffset = timezoneOffset * 1000;

    // Calculate local time taking into account the time zone
    const localTime = new Date(date.getTime() + userTimezoneOffset);

    // Get the day of the week, date, month, hours and minutes
    const dayOfWeek = DAYS_OF_WEEK[localTime.getUTCDay()];
    const day = localTime.getUTCDate();
    const month = MONTHS_OF_YEAR[localTime.getUTCMonth()];
    const hours = localTime.getUTCHours().toString().padStart(2, '0');
    const minutes = localTime.getUTCMinutes().toString().padStart(2, '0');

    return `${dayOfWeek}, ${month} ${day}, ${hours}:${minutes}`;
};