import {hideLoader, setAppError} from "../../../app/app.slice";
import {ERROR_MESSAGES} from "../../constants/error";

export const handleServerError = (data, dispatch, showError) => {
    if (showError) {
        dispatch(setAppError({error: ERROR_MESSAGES['SERVER']}));
        dispatch(hideLoader());
    }
};