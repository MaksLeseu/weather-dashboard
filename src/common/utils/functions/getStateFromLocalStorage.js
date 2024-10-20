export const getStateFromLocalStorage = (key) => {
    let state;
    const stateAsString = localStorage.getItem(key)
    if (stateAsString !== null) state = JSON.parse(stateAsString)
    return state
};