export const checkLocalStorage = (key)=> {
    const stateAsString = localStorage.getItem(key);
    return stateAsString === null;
};