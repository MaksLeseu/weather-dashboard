import {hideLoader, showLoader} from "../../../store/app/app.slice";

/**
 * Middleware for managing the loading state (loader).
 *
 * This middleware automatically shows the loader when an asynchronous action is dispatched and
 * hides it when the action completes successfully or with an error.
 * This way you don't need to manually call showLoader() and hideLoader() in each thunk.
 *
 * @param {Object} store - Redux store.
 * @returns {Function} - Function to handle the next middleware or action.
 */

export const loadingMiddleware = (store) => (next) => (action) => {
    if (action.type.endsWith('/pending')) {
        store.dispatch(showLoader());
    } else if (action.type.endsWith('/fulfilled') || action.type.endsWith('/rejected')) {
        store.dispatch(hideLoader());
    }
    return next(action);
};