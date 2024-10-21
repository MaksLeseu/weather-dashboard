import {hideLoader, setAppError} from "../../../app/app.slice";

export const handleServerError = (data, dispatch, showError) => {
    if (showError) {
        dispatch(setAppError({error: "Some error occurred"}));
        dispatch(hideLoader());
    }
};