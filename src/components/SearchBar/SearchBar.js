import {Input} from "../../common/components/Input/Input.js";
import {Button} from "../../common/components/Button/Button.js";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {citiesThunk} from "../../store/citiesThunk/cities.thunk";
import './styles.css';
import {useErrorHandler} from "../../common/utils/hooks/useErrorHandler";

export const SearchBar = () => {
    const dispatch = useDispatch();
    const [ cityName, setCityName ] = useState('');
    const { error, validateInput } = useErrorHandler();

    const handleInputChange = (event) => {
        setCityName(event.currentTarget.value);
        validateInput(event.currentTarget.value);
    };

    const handleClick = (event) => {
        event.preventDefault();
        if (cityName.trim() !== '' && !error) {
            dispatch(citiesThunk.fetchCityDetails(cityName));
            setCityName('');
        }
    };

    return (
        <section className={'searchbar_container'}>
            <form onSubmit={handleClick}>
                <Input
                    value={cityName}
                    style={{ marginRight: '10px' }}
                    placeholder={'Enter city'}
                    onChange={handleInputChange}
                />
                <Button type={'submit'} disabled={!!error}>Send</Button>
            </form>
            {error && <div className={'error-message'}>{error}</div>}
        </section>
    );
};