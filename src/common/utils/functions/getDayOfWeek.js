import {DAYS_OF_WEEK} from "../../constants/common";

export const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    return DAYS_OF_WEEK[date.getDay()];
};