export const saveToLocalStorage = (key, value) => {
    const valueAsString = JSON.stringify(value);
    localStorage.setItem(key, valueAsString)
};