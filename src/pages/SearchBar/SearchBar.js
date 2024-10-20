import {Input} from "../../common/components/Input/Input.js";
import {Button} from "../../common/components/Button/Button.js";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {citiesThunk} from "./cities.slice";

export const SearchBar = () => {
    const dispatch = useDispatch();

    const [ cityName, setCityName ] = useState('');

    const handleInputChange = (e) => setCityName(e.currentTarget.value);
    const handleClick = () => {
        dispatch(citiesThunk.fetchCityDetails(cityName));
        setCityName('');
    };

    return (
        <div>
            <Input
                value={cityName}
                placeholder={'Enter city'}
                onChange={handleInputChange}
            />
            <Button onClick={handleClick}>Send</Button>
        </div>
    );
};