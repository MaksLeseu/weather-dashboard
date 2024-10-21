import {Input} from "../../common/components/Input/Input.js";
import {Button} from "../../common/components/Button/Button.js";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {citiesThunk} from "./cities.slice";
import './SearchBar.css';
import {useErrorHandler} from "../../common/utils/hooks/useErrorHandler";

export const SearchBar = () => {
    const dispatch = useDispatch();
    const [ cityName, setCityName ] = useState('');
    const { error, validateInput } = useErrorHandler();

    const handleInputChange = (e) => {
        setCityName(e.currentTarget.value);
        validateInput(e.currentTarget.value);
    }

    const handleClick = () => {
        if (cityName.trim() !== '' && !error) {
            dispatch(citiesThunk.fetchCityDetails(cityName));
            setCityName('');
        }
    };

    return (
        <div className={'searchbar_container'}>
            <Input
                value={cityName}
                style={{ marginRight: '10px' }}
                placeholder={'Enter city'}
                onChange={handleInputChange}
            />
            <Button onClick={handleClick} disabled={!!error}>Send</Button>
            {error && <div className={'error-message'}>{error}</div>}
        </div>
    );
};