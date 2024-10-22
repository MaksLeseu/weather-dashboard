import {DECIMAL_PLACES, KELVIN_TO_CELSIUS_DIFF} from "../../constants/functions";

export const temperatureInCelsius = (temp) => (temp - KELVIN_TO_CELSIUS_DIFF).toFixed(DECIMAL_PLACES['ONE']);