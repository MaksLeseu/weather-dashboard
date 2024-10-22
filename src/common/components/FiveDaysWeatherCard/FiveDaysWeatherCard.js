import './styles.css';
import {getDayOfWeek} from "../../utils/functions/getDayOfWeek";
import {FIRST_ELEMENT} from "../../constants/api";

export const FiveDaysWeatherCard = ({ fiveDaysWeather }) => {
    if (!fiveDaysWeather[FIRST_ELEMENT]) {
        return;
    }
    return (
        <section className={'weather_five_days_container'}>
            <h2 id={'five-days-weather-title'}>Five-Day Weather Forecast</h2>
            <table className={'weather_five_days_table'}>
                <thead>
                <tr>
                    <th>Day of Week</th>
                    <th>Date</th>
                    <th>Temp</th>
                    <th>Humidity</th>
                    <th>Wind</th>
                </tr>
                </thead>
                <tbody>
                {fiveDaysWeather.map((weather, index) => (
                    <tr key={index}>
                        <td data-label={'Day of Week'}>{getDayOfWeek(weather.date)}</td>
                        <td data-label={'Date'}>{weather.date}</td>
                        <td data-label={'Temp'}>{weather.temperature}°C</td>
                        <td data-label={'Humidity'}>{weather.humidity}%</td>
                        <td data-label={'Wind'}>{weather.windSpeed}m/s</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
    );
};