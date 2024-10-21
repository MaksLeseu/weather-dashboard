import {Input} from "../../common/components/Input/Input.js";
import {Button} from "../../common/components/Button/Button.js";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {citiesThunk} from "./cities.slice";
import './SearchBar.css';

export const SearchBar = () => {
    const dispatch = useDispatch();

    const [ cityName, setCityName ] = useState('');

    const handleInputChange = (e) => setCityName(e.currentTarget.value);
    const handleClick = () => {
        dispatch(citiesThunk.fetchCityDetails(cityName));
        setCityName('');
    };

    return (
        <div className={'searchbar_container'}>
            <Input
                value={cityName}
                style={{ marginRight: '10px' }}
                placeholder={'Enter city'}
                onChange={handleInputChange}
            />
            <Button onClick={handleClick}>Send</Button>
        </div>
    );
};