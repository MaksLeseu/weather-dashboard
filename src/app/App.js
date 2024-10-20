import {SearchBar} from "../pages/SearchBar/SearchBar.js";
import {WeatherDashboard} from "../pages/WeatherDashboard/WeatherDashboard";
import {FavoriteCitiesContainer} from "../pages/FavoriteCities/FavoriteCitiesContainer";
import './App.css';

function App() {
  return (
      <div className={'color_container'}>
          <div className={'app_container'}>
              <FavoriteCitiesContainer/>
              <SearchBar/>
              <WeatherDashboard/>
          </div>
      </div>
  );
}

export default App;
