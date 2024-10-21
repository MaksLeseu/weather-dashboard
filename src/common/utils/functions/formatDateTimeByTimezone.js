export const formatDateTimeByTimezone = (timezoneOffset) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const date = new Date();

    const userTimezoneOffset = timezoneOffset * 1000;
    const localTime = new Date(date.getTime() + userTimezoneOffset);

    const dayOfWeek = daysOfWeek[localTime.getUTCDay()];
    const day = localTime.getUTCDate();
    const month = monthsOfYear[localTime.getUTCMonth()];
    const hours = localTime.getUTCHours().toString().padStart(2, '0');
    const minutes = localTime.getUTCMinutes().toString().padStart(2, '0');

    return `${dayOfWeek}, ${month} ${day}, ${hours}:${minutes}`;
};