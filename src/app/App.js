import {SearchBar} from "../components/SearchBar/SearchBar.js";
import {WeatherDashboard} from "../components/WeatherDashboard/WeatherDashboard";
import {FavoriteCitiesContainer} from "../components/FavoriteCitiesContainer/FavoriteCitiesContainer";
import './styles.css';

function App() {
  return (
      <div className={'app_container'}>
          <FavoriteCitiesContainer/>
          <SearchBar/>
          <WeatherDashboard/>
      </div>
  );
}

export default App;
