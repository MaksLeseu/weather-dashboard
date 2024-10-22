import {DAYS_OF_WEEK, MONTHS_OF_YEAR} from "../../constants/common";

export const formatDateTimeByTimezone = (timezoneOffset) => {
    const date = new Date();

    const userTimezoneOffset = timezoneOffset * 1000;
    const localTime = new Date(date.getTime() + userTimezoneOffset);

    const dayOfWeek = DAYS_OF_WEEK[localTime.getUTCDay()];
    const day = localTime.getUTCDate();
    const month = MONTHS_OF_YEAR[localTime.getUTCMonth()];
    const hours = localTime.getUTCHours().toString().padStart(2, '0');
    const minutes = localTime.getUTCMinutes().toString().padStart(2, '0');

    return `${dayOfWeek}, ${month} ${day}, ${hours}:${minutes}`;
};