import {hideLoader, setAppError} from "../../../store/app/app.slice";
import {ERROR_MESSAGES} from "../../constants/error";

/**
 * Handles server errors and manages application state based on the result.
 * @param {Object} data - Response data from the server (not used, but may be useful for further processing).
 * @param {boolean} showError - Flag that determines whether to show an error message.
 */

export const handleServerError = (data, dispatch, showError) => {
    if (showError) {
        dispatch(setAppError({error: ERROR_MESSAGES['SERVER']}));
        dispatch(hideLoader());
    }
};