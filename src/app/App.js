import {SearchBar} from "../pages/SearchBar/SearchBar.js";
import {WeatherDashboard} from "../pages/WeatherDashboard/WeatherDashboard";
import {FavoriteCitiesContainer} from "../pages/FavoriteCities/FavoriteCitiesContainer";


function App() {
  return (
    <div>
        <FavoriteCitiesContainer />
        <SearchBar />
        <WeatherDashboard />
    </div>
  );
}

export default App;
