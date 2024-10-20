export const getStateFromLocalStorage = (key, defaultState) => {
    let state = defaultState
    const stateAsString = localStorage.getItem(key)
    if (stateAsString !== null) state = JSON.parse(stateAsString)
    return state
};